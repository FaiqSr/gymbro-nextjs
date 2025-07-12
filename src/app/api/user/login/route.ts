import { UserValidation } from "@/lib/validation/user.validation";
import { WebResponse } from "@/types/response";
import { UserLoginRequest, UserLoginResponse } from "@/types/user";
import { comparePassword } from "@/utils/password";
import prisma from "@/utils/prisma";
import { ValidationService } from "@/utils/validation";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // Import jsonwebtoken

export async function POST(
  req: Request
): Promise<NextResponse<WebResponse<UserLoginResponse>>> {
  const body: UserLoginRequest = await req.json();

  try {
    ValidationService.validate(UserValidation.LOGIN, body);
  } catch (error) {
    return NextResponse.json(
      {
        status: 400,
        message: "Bad Request",
        error: (error as Error).message,
      },
      { status: 400 }
    );
  }

  let user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          username: body.usernameOrEmail,
        },
        {
          email: body.usernameOrEmail,
        },
      ],
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        status: 400,
        message: "Bad Request",
        error: "User not found",
      },
      { status: 400 }
    );
  }

  const userPasswordMatch = await comparePassword(
    body.password,
    user!.password
  );
  if (!userPasswordMatch) {
    return NextResponse.json(
      {
        status: 400,
        message: "Bad Request",
        error: "Invalid Password",
      },
      { status: 400 }
    );
  } else {
    const secret = process.env.JWT_SECRET || "your_jwt_secret";
    const expiresIn = "1h";

    const token = jwt.sign(
      { id: user!.id, username: user!.username, email: user!.email },
      secret,
      { expiresIn }
    );

    user = await prisma.user.update({
      where: {
        id: user!.id,
      },
      data: {
        token: token,
      },
    });

    return NextResponse.json(
      {
        status: 200,
        message: "Success",
        data: {
          username: user!.username,
          token: token,
        },
      },
      { status: 200 }
    );
  }
}
