import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { hasher } from '../../utils/hasher';
import { jwtUtil } from '../../utils/jwt';
import { LoginInput, RegisterInput, ChangePasswordInput } from './auth.schemas';

export class AuthService {
  static async login(input: LoginInput) {
    const user = await prisma.user.findUnique({
      where: { email: input.email.toLowerCase().trim() },
    });

    if (!user) {
      throw AppError.badRequest('ایمیل یا کلمه عبور وارد شده نادرست است');
    }

    if (!user.isActive) {
      throw AppError.forbidden('حساب کاربری شما غیرفعال شده است. با مدیریت تماس بگیرید.');
    }

    const isMatch = await hasher.compare(input.password, user.password);
    if (!isMatch) {
      throw AppError.badRequest('ایمیل یا کلمه عبور وارد شده نادرست است');
    }

    const token = jwtUtil.sign({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        avatar: user.avatar,
      },
    };
  }

  static async register(input: RegisterInput) {
    const existing = await prisma.user.findUnique({
      where: { email: input.email.toLowerCase().trim() },
    });

    if (existing) {
      throw AppError.conflict('کاربری با این ایمیل در سامانه وجود دارد');
    }

    const hashedPassword = await hasher.hash(input.password);

    const user = await prisma.user.create({
      data: {
        email: input.email.toLowerCase().trim(),
        fullName: input.fullName.trim(),
        password: hashedPassword,
        role: input.role,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        createdAt: true,
      },
    });

    return user;
  }

  static async getMe(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        avatar: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw AppError.notFound('کاربر یافت نشد');
    }

    return user;
  }

  static async changePassword(userId: string, input: ChangePasswordInput) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw AppError.notFound('کاربر یافت نشد');
    }

    const isMatch = await hasher.compare(input.currentPassword, user.password);
    if (!isMatch) {
      throw AppError.badRequest('کلمه عبور فعلی نادرست است');
    }

    const hashedPassword = await hasher.hash(input.newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return { message: 'کلمه عبور با موفقیت بروزرسانی شد' };
  }
}
