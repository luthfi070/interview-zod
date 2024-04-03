import { z, object } from "zod";

export const AuthLoginRequest = object({
  body: object({
    email: z.string(),
    password: z.string(),
  }).strict(),
});

export const AuthLoginResponse = object({
  email: z.string(),
  password: z.string(),
});
