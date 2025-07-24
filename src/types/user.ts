import { Metode, Type } from "@/generated/prisma";

export type UserLoginResponse = {
  username: string;
  token: string;
};

export type UserLoginRequest = {
  usernameOrEmail: string;
  password: string;
};

export type UserRegisterRequest = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
};

export type UserRegisterResponse = {
  username: string;
  email: string;
};

export type UserCurrentResponse = {
  username: string;
  firstName: string;
  lastName?: string | null;
  email: string;
  token: string | null;
  foto: string | null;
  gender: string | null;
  type: Type | null;
  metode: Metode | null;
};

export type UserUpdateRequest = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  gender?: string;
  type?: Type;
  metode?: Metode;
};

export type UserUpdateResponse = {
  username: string;
};
