import express from "express";
import authRouter from "./auth";
import studentRouter from "./student";

const indexRoute = express.Router();

indexRoute.use("/auth", authRouter);
indexRoute.use("/student", studentRouter);

export default indexRoute;
