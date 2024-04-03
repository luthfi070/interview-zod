import { z, object } from "zod";

export const CreateStudentRequest = object({
  body: object({
    name: z.string(),
    age: z.number(),
  }).strict(),
});

export const CreateStudentResponse = object({
  message: z.string(),
  idStudent: z.string(),
  success: z.string(),
});

export const GetStudentResponse = object({
  name: z.string(),
  age: z.number(),
});

export const GetAllStudentResponse = object({
  message: z.string(),
  data: z.array(GetStudentResponse),
  success: z.string(),
});

export const GetStudentByIdRequest = object({
  params: object({
    id: z.string(),
  }),
});

export const GetStudentByIdResponse = object({
  message: z.string(),
  data: z.union([GetStudentResponse, z.null()]),
  success: z.string(),
});

export const DeleteStudentByIdRequest = object({
  params: object({
    id: z.string(),
  }),
});

export const DeleteStudentByIdResponse = object({
  message: z.string(),
  deletedStudent: z.union([z.string(), z.undefined()]),
  success: z.string(),
});

export const UpdateStudentByIdRequest = object({
  params: object({
    id: z.string(),
  }),
  body: object({
    name: z.string(),
    age: z.number(),
  }).strict(),
});

export const UpdateStudentByIdResponse = object({
  message: z.string(),
  updatedStudent: z.union([GetStudentResponse, z.undefined()]),
  success: z.string(),
});
