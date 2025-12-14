import { Request ,Response } from "express";
import user from "../models/user";
import { MESSAGES } from "../constants/messages";
export const getAllUsers = async(req:Request,res:Response) => {
    try{
    const users = await user.find().select("-password");
    return res.json(users);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:MESSAGES.COMMON.INTERNAL_SERVER_ERROR})
        
    }
}