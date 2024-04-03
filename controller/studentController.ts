import { Request, Response } from "express";
import { CreateStudentRequest } from "../schema/studentSchema";

class StudentController {
  static async CreateStudent(req: Request, res: Response) {
    try {
      console.log(req.body);
      res.status(200).json({
        message: "student created",
      });
    } catch (err) {
      throw err;
    }
  }
}

export default StudentController;
