import jwt from 'jsonwebtoken';
import { env } from '../config';

export interface TokenPayload {
  userId: string;
  email: string;
  role: string;
}

export const jwtUtil = {
  sign: (payload: TokenPayload, expiresIn?: string): string => {
    return jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: (expiresIn || env.JWT_EXPIRES_IN) as jwt.SignOptions['expiresIn'],
    });
  },

  verify: (token: string): TokenPayload => {
    return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
  },
};
