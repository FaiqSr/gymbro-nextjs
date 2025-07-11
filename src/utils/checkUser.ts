import prisma from "./prisma";


export async function checkUserEmail(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    return user ? true : false;
}

export async function checkUserUsername(username: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    return user ? true : false;
}