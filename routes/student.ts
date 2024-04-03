import express from "express";
import StudentController from "../controller/studentController";

const studentRouter = express.Router();

studentRouter.post("/", StudentController.CreateStudent);

export default studentRouter;
