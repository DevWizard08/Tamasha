import bcrypt from "bcrypt";
import crypto from "crypto";
import user from "../models/user";
import { RefreshToken } from "../models/refreshToken";
import { generateAccessToken } from "../utils/util";
import { AppError } from "../utils/AppError";

export const registerUser = async (
  email: string,
  password: string,
  role: "USER" | "ADMIN"
) => {
  const existingUser = await user.findOne({ email });
  if (existingUser) {
    throw new AppError("Email already in use",409);
  } 
  if (!role){
    throw new AppError("Role Missing",400);
  }
  const User = await user.create({
    email,
    password, 
    role,
  });

  return {
    id: User._id,
    email: User.email,
    role: User.role,
}
}
export const loginUser = async (email: string, password: string) => {
  const User = await user.findOne({ email });
  if (!User) throw new AppError("Invalid credentials",401);

  const match = await bcrypt.compare(password, User.password);
  if (!match) throw new AppError("Invalid credentials",401);

  const accessToken = generateAccessToken({
    userId: User._id,
    role: User.role,
  });

  const refreshToken = crypto.randomBytes(40).toString("hex");

  await RefreshToken.create({
    userId: User._id,
    token: refreshToken,
    expiresAt: new Date(
      Date.now() +
        Number(process.env.REFRESH_TOKEN_EXPIRES_IN) *
          24 *
          60 *
          60 *
          1000
    ),
  });

  return { accessToken, refreshToken };
};

export const refreshAccessToken = async (token: string) => {
  const result = await RefreshToken.aggregate<{
    userId: string;
    role: number;
  }>([
    { $match: { token } },
    { $match: { expiresAt: { $gt: new Date() } } },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $project: {
        userId: "$user._id",
        role: "$user.role",
      },
    },
  ]);

  if (!result.length) {
    throw new AppError("Invalid or expired refresh token",409);
  }

  return generateAccessToken({
    userId: result[0].userId,
    role: result[0].role,
  });
};
