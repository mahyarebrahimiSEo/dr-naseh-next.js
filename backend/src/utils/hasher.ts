import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 12;

export const hasher = {
  hash: async (plain: string): Promise<string> => {
    return bcrypt.hash(plain, SALT_ROUNDS);
  },
  compare: async (plain: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(plain, hash);
  },
};
