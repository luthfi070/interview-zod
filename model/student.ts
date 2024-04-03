import mongoose from "mongoose";

export interface StudentInterface extends mongoose.Document {
  name: string;
  age: number;
}

const StudentModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const StudentSchema = mongoose.model<StudentInterface>("Student", StudentModel);

export default StudentSchema;
