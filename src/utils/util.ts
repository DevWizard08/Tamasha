import jwt, { SignOptions } from "jsonwebtoken";

export const generateAccessToken = (payload: object): string => {
  const options: SignOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    options
  );
};
