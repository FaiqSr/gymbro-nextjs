export type UserLoginResponse = {
    username: string,
    token: string,
}

export type UserLoginRequest = {
    usernameOrEmail: string,
    password: string
}

export type UserRegisterRequest = {
    name: string,
    username: string,
    email: string,
    password: string
}

export type  UserRegisterResponse = {
    username: string,
    email: string,
}


export type UserCurrentResponse = {
    username: string;
    email: string;
    token: string | null;
}