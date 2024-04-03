import express from "express";
import StudentController from "../controller/studentController";
import {
  CreateStudentRequest,
  GetStudentByIdRequest,
  DeleteStudentByIdRequest,
  UpdateStudentByIdRequest,
} from "../schema/studentSchema";
import { Validator } from "../middleware/validator";

const studentRouter = express.Router();

studentRouter.post(
  "/",
  Validator(CreateStudentRequest),
  StudentController.CreateStudent
);
studentRouter.get("/", StudentController.GetAllStudent);
studentRouter.get(
  "/:id",
  Validator(GetStudentByIdRequest),
  StudentController.GetStudentById
);
studentRouter.delete(
  "/:id",
  Validator(DeleteStudentByIdRequest),
  StudentController.DeleteStudentById
);
studentRouter.put(
  "/:id",
  Validator(UpdateStudentByIdRequest),
  StudentController.UpdateStudentById
);

export default studentRouter;
