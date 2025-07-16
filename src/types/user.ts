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
  name: string;
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
  email: string;
  token: string | null;
  foto: string | null;
  gender: string | null;
  type: Type | null;
  metode: Metode | null;
};

export type UserUpdateRequest = {
  username?: string;
  name?: string;
  email?: string;
  password?: string;
  gender?: string;
  type?: Type;
  metode?: Metode;
};

export type UserUpdateResponse = {
  username: string;
};
