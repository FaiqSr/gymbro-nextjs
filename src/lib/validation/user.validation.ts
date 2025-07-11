import z, { ZodType } from "zod";

export class UserValidation {
    static readonly REGISTER: ZodType= z.object({
        name: z.string().min(5).max(100),
        email: z.string().email().min(5).max(100),
        username: z.string().min(5).max(100),
        password: z.string().min(8),
    })

    static readonly LOGIN: ZodType= z.object({
        usernameOrEmail: z.string().min(5).max(100),
        password: z.string().min(8),
    })

}