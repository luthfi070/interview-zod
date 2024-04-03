import { z, object } from "zod";

export const CreateStudentRequest = object({
  body: object({
    name: z.string(),
    age: z.string(),
  }),
});
