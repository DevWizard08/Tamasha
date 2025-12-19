import { Request, Response } from "express";
import { loginUser, refreshAccessToken,registerUser } from "../services/auth";
import { MESSAGES } from "../constants/messages";


export const register = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  const user = await registerUser(email, password, role);

  res.status(201).json({
    message: MESSAGES.AUTH.REGISTER_SUCCESS,
    user,
  });
};


export const login = async (req: Request, res: Response) => {
  
    const { email, password } = req.body;
    const register  = await loginUser(email,password);
    return res.status(200).json(register);
 
}
export const refreshToken = async (req: Request, res: Response) => {
  
    const {refreshToken} = req.body;
    const accessToken = await refreshAccessToken(refreshToken);
    return res.status(200).json({accessToken});
 
};
