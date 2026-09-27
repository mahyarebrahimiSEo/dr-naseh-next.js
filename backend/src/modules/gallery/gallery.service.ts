import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { CreateGalleryItemInput, UpdateGalleryItemInput } from './gallery.schemas';

export class GalleryService {
  static async getItems(category?: string) {
    const where: any = {};
    if (category && category !== 'all') {
      where.category = category;
    }

    return prisma.galleryItem.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
    });
  }

  static async createItem(input: CreateGalleryItemInput) {
    return prisma.galleryItem.create({ data: input });
  }

  static async updateItem(id: string, input: UpdateGalleryItemInput) {
    const existing = await prisma.galleryItem.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('آیتم گالری یافت نشد');
    }

    return prisma.galleryItem.update({
      where: { id },
      data: input,
    });
  }

  static async deleteItem(id: string) {
    const existing = await prisma.galleryItem.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('آیتم گالری یافت نشد');
    }

    await prisma.galleryItem.delete({ where: { id } });
    return { message: 'تصویر از گالری حذف گردید' };
  }
}
