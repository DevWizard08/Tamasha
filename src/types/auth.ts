import {Role} from "../models/user";

export interface JwtPayload{
    userId:string,
    role:Role,
    iat?:number,
    exp?:number
}