import express from "express";
import AuthController from "../controller/authController";
import { Validator } from "../middleware/validator";
import { AuthLoginRequest } from "../schema/authSchema";

const authRouter = express.Router();

authRouter.post("/login", Validator(AuthLoginRequest), AuthController.login);

export default authRouter;
