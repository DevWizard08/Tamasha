import { Request, Response } from "express";
import { MESSAGES } from "../constants/messages";

export const getProfile = (req: Request, res: Response) => {
  try{
  return res.status(200).json({
    message: MESSAGES.USER.PROFILE_FETCH_SUCCESS,
    user: req.user,
  });
}
catch(err){
  console.log(err);
  return res.status(500).json({message:MESSAGES.COMMON.INTERNAL_SERVER_ERROR});
}
};
