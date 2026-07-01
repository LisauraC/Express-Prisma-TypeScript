import jwt, { SignOptions } from 'jsonwebtoken';

type TPayload = { id: string };

export const generateToken = (payload: TPayload, expiresIn: string): string => {
  const options: SignOptions = { expiresIn: expiresIn as SignOptions['expiresIn'] };
  return jwt.sign(payload, process.env.JWT_SECRET as string, options);
};

export const verifyToken = (token: string): TPayload => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as TPayload;
};