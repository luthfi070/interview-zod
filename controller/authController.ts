import { Request, Response } from "express";
import { AuthLoginRequest, AuthLoginResponse } from "../schema/authSchema";
import { z } from "zod";

class AuthController {
  static async login(
    req: Request<{}, {}, z.infer<typeof AuthLoginRequest>["body"]>,
    res: Response<z.infer<typeof AuthLoginResponse>>
  ) {
    try {
      res.status(200).json(req.body);
    } catch (err) {
      throw err;
    }
  }
}

export default AuthController;
