import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/auth";
import { Role } from "../models/user";
import { MESSAGES } from "../constants/messages";
import { measureMemory } from "vm";

const verifyToken = (req: Request): JwtPayload => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    throw new Error(MESSAGES.AUTH.UNAUTHORIZED);
  }

  return jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;
};

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const decoded = verifyToken(req);

    if (decoded.role !== Role.ADMIN) {
      return res.status(403).json({ message: MESSAGES.ADMIN.ADMIN_ONLY });
    }

    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message:MESSAGES.AUTH.UNAUTHORIZED });
  }
};

export const isUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const decoded = verifyToken(req);

    if (decoded.role !== Role.USER) {
      return res.status(403).json({ message: MESSAGES.USER.USER_ONLY });
    }

    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: MESSAGES.AUTH.UNAUTHORIZED });
  }
};
