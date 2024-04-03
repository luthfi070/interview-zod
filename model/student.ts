import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  password: String,
});

export default StudentSchema;
