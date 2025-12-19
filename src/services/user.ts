import user from "../models/user";
import { AppError } from "../utils/AppError";


export const getUsersbyId = async(userId:string) => {
const users = await user.findById(userId).select("-password");
if(!users){
    throw new AppError("No users found",409);
}
return users;
}
