import { Request, Response } from "express";
import { z } from "zod";
import {
  CreateStudentRequest,
  CreateStudentResponse,
  GetAllStudentResponse,
  GetStudentByIdRequest,
  GetStudentByIdResponse,
  DeleteStudentByIdRequest,
  DeleteStudentByIdResponse,
  UpdateStudentByIdRequest,
} from "../schema/studentSchema";
import StudentService from "../service/StudentService";

class StudentController {
  static async CreateStudent(
    req: Request<z.infer<typeof CreateStudentRequest>>["body"],
    res: Response<z.infer<typeof CreateStudentResponse>>
  ) {
    try {
      let student = await StudentService.CreateStudent(req.body);

      res.status(200).json({
        message: "Student Created",
        idStudent: student._id,
        success: "OK",
      });
    } catch (err) {
      throw err;
    }
  }

  static async GetAllStudent(
    req: Request,
    res: Response<z.infer<typeof GetAllStudentResponse>>
  ) {
    try {
      let students = await StudentService.GetAllStudent();

      res.status(200).json({
        message: "Get All Student",
        data: students,
        success: "OK",
      });
    } catch (err) {
      throw err;
    }
  }

  static async GetStudentById(
    req: Request<z.infer<typeof GetStudentByIdRequest>["params"]>,
    res: Response<z.infer<typeof GetStudentByIdResponse>>
  ) {
    try {
      let student = await StudentService.GetStudentById(req.params.id);

      res.status(200).json({
        message: "Get Student By Id",
        data: student,
        success: "OK",
      });
    } catch (err) {
      throw err;
    }
  }

  static async UpdateStudentById(
    req: Request<
      z.infer<typeof UpdateStudentByIdRequest>["params"],
      z.infer<typeof UpdateStudentByIdRequest>["body"]
    >,
    res: Response<z.infer<typeof GetStudentByIdResponse>>
  ) {
    try {
      let updateStudent = await StudentService.updateStudent(
        req.params.id,
        req.body
      );

      res.status(200).json({
        message: "Update student",
        data: updateStudent,
        success: "OK",
      });
    } catch (err) {
      throw err;
    }
  }

  static async DeleteStudentById(
    req: Request<z.infer<typeof DeleteStudentByIdRequest>["params"]>,
    res: Response<z.infer<typeof DeleteStudentByIdResponse>>
  ) {
    try {
      let deleteStudent = await StudentService.DeleteStudentById(req.params.id);

      res.status(200).json({
        message: "Delete Student",
        deletedStudent: deleteStudent?.name,
        success: "OK",
      });
    } catch (err) {
      throw err;
    }
  }
}

export default StudentController;
