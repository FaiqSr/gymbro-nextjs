import { UserValidation } from "@/lib/validation/user.validation";
import { WebResponse } from "@/types/response";
import { UserRegisterRequest, UserRegisterResponse } from "@/types/user";
import { checkUserEmail, checkUserUsername } from "@/utils/checkUser";
import { createHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";
import { ValidationService } from "@/utils/validation";
import { NextResponse } from "next/server";

export const POST = async (req: Request): Promise<NextResponse<WebResponse<UserRegisterResponse>>> => {
    const body: UserRegisterRequest = await req.json();

    try {
        ValidationService.validate(UserValidation.REGISTER, body)
    } catch (error) {
        return NextResponse.json({ 
            status: 400,
            message: 'Bad Request',
            error: (error as Error).message
        },  {status: 400});
    }
    
    const userWithSameUsername = await checkUserUsername(body.username);
    
    if(userWithSameUsername){
        return NextResponse.json({ 
            status: 400,
            message: 'Bad Request',
            error: 'User already exists'
        }, {status: 400});
    }
    
    const userWithSameEmail = await checkUserEmail(body.email);
    
    if(userWithSameEmail){
        return NextResponse.json({ 
            status: 400,
            message: 'Bad Request',
            error: 'User already exists'
        }, {status: 400});
    }

    body.password = await createHashPassword(body.password);
    
    const user = await prisma.user.create({
        data: body
    });

    return NextResponse.json({ 
        status: 200,
        message: 'Success',
        data: {
            username: user.username,
            email: user.email
        }
     }, {status: 200});
};