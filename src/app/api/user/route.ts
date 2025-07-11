import { WebResponse } from "@/types/response";
import { UserCurrentResponse } from "@/types/user";
import prisma from "@/utils/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse<WebResponse<UserCurrentResponse>>> => {

    const token = (await headers()).get('authorization');

    
    const user = await prisma.user.findFirst({
        where: {
            token: token
        }
    })

    if(!user) {
        return NextResponse.json<WebResponse<UserCurrentResponse>>({
            status: 400,
            message: 'Bad Request',
            error: 'User not found'
        }, {status: 400});
    }
    
    return NextResponse.json<WebResponse<UserCurrentResponse>>({
        status: 200,
        message: 'Success',
        data: {
            username: user.username,
            email: user.email,
            token: user.token
        }
    }, {status: 200});
};