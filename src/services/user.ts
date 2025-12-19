import user from "../models/user";


export const getAllUsersService = async(userId:string) => {
const users = await user.findById(userId).select("-password");
if(!users){
    throw new Error("No users found");
}
return users;
}
