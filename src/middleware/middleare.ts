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

    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch(err) {
    console.log(err);
    
    return res.status(401).json({ message:MESSAGES.AUTH.TOKEN_EXPIRED });
  }
};

export const isUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const decoded = verifyToken(req);

    if (![Role.USER, Role.ADMIN].includes(decoded.role)) {
      return res.status(403).json({ message: MESSAGES.USER.USER_ONLY });
    }

    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (err){
    console.log(err);
    
    return res.status(401).json({ message: MESSAGES.AUTH.TOKEN_EXPIRED });
  }
};
