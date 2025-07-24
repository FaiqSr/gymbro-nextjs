import { UserValidation } from "@/lib/validation/user.validation";
import { WebResponse } from "@/types/response";
import {
  UserCurrentResponse,
  UserUpdateRequest,
  UserUpdateResponse,
} from "@/types/user";
import { checkUserEmail, checkUserUsername } from "@/utils/checkUser";
import prisma from "@/utils/prisma";
import { ValidationService } from "@/utils/validation";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (): Promise<
  NextResponse<WebResponse<UserCurrentResponse>>
> => {
  let token = (await headers()).get("authorization");
  if (!token || !token.startsWith("Bearer ")) {
    return NextResponse.json<WebResponse<UserCurrentResponse>>(
      {
        message: "Unauthorized",
        error: "Authorization header is missing or invalid",
      },
      { status: 401 }
    );
  }

  token = token.split(" ")[1];
  const user = await prisma.user.findFirst({
    where: {
      token: token,
    },
  });

  if (!user) {
    return NextResponse.json<WebResponse<UserCurrentResponse>>(
      {
        message: "Bad Request",
        error: "User not found",
      },
      { status: 400 }
    );
  }

  return NextResponse.json<WebResponse<UserCurrentResponse>>(
    {
      message: "Success",
      data: {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        foto: user.foto,
        type: user.type,
        gender: user.gender,
        metode: user.metode,
        token: user.token,
      },
    },
    { status: 200 }
  );
};

export async function PUT(
  request: Request
): Promise<NextResponse<WebResponse<UserUpdateResponse>>> {
  const body: UserUpdateRequest = await request.json();
  const token = request.headers.get("authorization");

  if (!token) {
    return NextResponse.json<WebResponse<UserUpdateResponse>>(
      {
        message: "Unauthorized",
        error: "Authorization token is missing",
      },
      { status: 401 }
    );
  }
  try {
    ValidationService.validate(UserValidation.UPDATE, body);
  } catch (error) {
    return NextResponse.json<WebResponse<UserUpdateResponse>>(
      {
        message: "Bad Request",
        error: (error as Error).message,
      },
      { status: 400 }
    );
  }

  if (body.username) {
    const userWithSameUsername = await checkUserUsername(body.username!);

    if (userWithSameUsername) {
      return NextResponse.json<WebResponse<UserUpdateResponse>>(
        {
          message: "Username telah digunakan",
        },
        { status: 400 }
      );
    }
  }

  if (body.email) {
    const userWIthSameEmail = await checkUserEmail(body.email!);

    if (userWIthSameEmail) {
      return NextResponse.json<WebResponse<UserUpdateResponse>>(
        {
          message: "Email telah digunakan",
        },
        { status: 400 }
      );
    }
  }

  const user = await prisma.user.update({
    where: { token },
    data: body,
  });

  return NextResponse.json<WebResponse<UserUpdateResponse>>(
    {
      message: "Berhasil mengubah data user",
      data: {
        username: user.username,
      },
    },
    { status: 200 }
  );
}
