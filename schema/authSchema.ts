import { z, object } from "zod";

export const AuthLoginRequest = object({
  body: object({
    email: z.string(),
    passwords: z.string(),
  }),
});

export const AuthLoginResponse = object({
  email: z.string(),
  passwords: z.string(),
});
