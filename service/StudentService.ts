import StudentSchema from "../model/student";
import {
  CreateStudentRequest,
  UpdateStudentByIdRequest,
} from "../schema/studentSchema";
import { z } from "zod";

class StudentService {
  static async CreateStudent(data: z.infer<typeof CreateStudentRequest>) {
    try {
      const newStudent = new StudentSchema(data);

      return newStudent.save();
    } catch (error) {
      throw error;
    }
  }

  static async GetAllStudent() {
    try {
      const students = StudentSchema.find();

      return students;
    } catch (error) {
      throw error;
    }
  }

  static async GetStudentById(idStudent: string) {
    try {
      const student = StudentSchema.findOne({
        _id: idStudent,
      });

      return student;
    } catch (error) {
      throw error;
    }
  }

  static async DeleteStudentById(idStudent: string) {
    try {
      const student = StudentSchema.findOneAndDelete({
        _id: idStudent,
      });

      return student;
    } catch (error) {
      throw error;
    }
  }

  static async updateStudent(
    idStudent: string,
    data: z.infer<typeof UpdateStudentByIdRequest>
  ) {
    try {
      const updateStudent = StudentSchema.findOneAndUpdate(
        {
          _id: idStudent,
        },
        data
      );

      return updateStudent;
    } catch (error) {
      throw error;
    }
  }
}

export default StudentService;
