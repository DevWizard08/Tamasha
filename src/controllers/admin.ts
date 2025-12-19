import { Request ,Response } from "express";
import { getAllUsersService } from "../services/admin";


export const getAllUsers = async(req:Request,res:Response) => {
    const users = await getAllUsersService();
    return res.status(200).json(users);
}