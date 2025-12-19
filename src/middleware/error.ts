import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import { MESSAGES } from "../constants/messages";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    message: MESSAGES.COMMON.INTERNAL_SERVER_ERROR,
  });
};
