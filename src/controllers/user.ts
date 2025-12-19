import { Request, Response } from "express";
import { MESSAGES } from "../constants/messages";
import { getAllUsersService } from "../services/user";  

export const getProfile = async(req: Request, res: Response) => {
  try{
    const userId = req.userId;
    if(!userId){
      return res.status(400).json({message:MESSAGES.USER.USERID_IS_MISSING})
    }
    const result = await getAllUsersService(userId);

  return res.status(200).json({
    message: MESSAGES.USER.PROFILE_FETCH_SUCCESS,
    user: result,
  });
}
catch(err){
  console.log(err);
  return res.status(500).json({message:MESSAGES.COMMON.INTERNAL_SERVER_ERROR});
}
};
