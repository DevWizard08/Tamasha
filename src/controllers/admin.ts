import { Request ,Response } from "express";
import { getAllUsersService } from "../services/admin";
import { MESSAGES } from "../constants/messages";


export const getAllUsers = async(req:Request,res:Response) => {
    try{
    const users = await getAllUsersService();
    return res.json(users);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:MESSAGES.COMMON.INTERNAL_SERVER_ERROR})
        
    }
}