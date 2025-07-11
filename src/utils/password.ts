import bcrypt from "bcrypt";

export async function createHashPassword(password:string){
    return bcrypt.hash(password, 10);
}

export async function comparePassword(password:string, hashPassword:string){
    return bcrypt.compare(password, hashPassword);
}