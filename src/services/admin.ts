import user from "../models/user";

export const getAllUsersService = async() => {
   const users = await user.find().select("-password");
   if(!users.length){
    return [];
   }
   return users;
}