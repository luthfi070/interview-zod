import StudentSchema from "../model/student";
import { CreateStudentRequest } from "../schema/studentSchema";
import { z } from "zod";

class StudentService {
  static async CreateStudent(data: z.infer<typeof CreateStudentRequest>) {
    const newStudent = new StudentSchema(data);

    newStudent.save();
  }
}

export default StudentService;
