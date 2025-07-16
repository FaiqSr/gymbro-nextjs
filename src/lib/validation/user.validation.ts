import z, { ZodType } from "zod";

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    name: z.string().min(5).max(100),
    email: z.string().email().min(5).max(100),
    username: z.string().min(5).max(100),
    password: z.string().min(8),
  });

  static readonly LOGIN: ZodType = z.object({
    usernameOrEmail: z.string().min(5).max(100),
    password: z.string().min(8),
  });

  static readonly UPDATE: ZodType = z.object({
    username: z.string().max(255).optional(),
    email: z.string().email().optional(),
    name: z.string().min(5).max(255).optional(),
    password: z.string().min(8).max(255).optional(),
    foto: z.string().optional(),
    metode: z.enum(["fullBody", "upperLower"]).optional(),
    type: z.enum(["strength", "bulking", "cutting"]).optional(),
    gender: z.enum(["l", "p"]).optional(),
  });
}
