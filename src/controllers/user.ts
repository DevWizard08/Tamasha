import { Request, Response } from "express";
import { MESSAGES } from "../constants/messages";
import { getUsersbyId } from "../services/user";  
import { AppError } from "../utils/AppError";

export const getProfile = async(req: Request, res: Response) => {
    const userId = req.userId;
    if (!userId) {
    throw new AppError(MESSAGES.USER.USERID_IS_MISSING, 400);
  }

    const result = await getUsersbyId(userId);

  return res.status(200).json({
    message: MESSAGES.USER.PROFILE_FETCH_SUCCESS,
    user: result,
  });

};
