import { Request, Response } from "express";
import { loginUser, refreshAccessToken,registerUser } from "../services/auth";
import { MESSAGES } from "../constants/messages";


export const register = async (req: Request, res: Response) => {
  try {
    const { email, password,role } = req.body;

    const user = await registerUser(email, password,role);

    return res.status(201).json({
      message: MESSAGES.AUTH.REGISTER_SUCCESS,
      user,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }

    return res.status(500).json({
      message: MESSAGES.COMMON.INTERNAL_SERVER_ERROR,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const register  = await loginUser(email,password);
    return res.status(200).json(register);
  }  catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.status(500).json({ message: MESSAGES.COMMON.INTERNAL_SERVER_ERROR });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const {refreshToken} = req.body;
    const accessToken = await refreshAccessToken(refreshToken);
    return res.status(200).json({accessToken});
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.status(500).json({ message: MESSAGES.COMMON.INTERNAL_SERVER_ERROR });
  }
};
