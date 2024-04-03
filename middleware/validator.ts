import { AnyZodObject, object } from "zod";
import { Request, Response, NextFunction } from "express";

export const Validator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      throw error;
    }
  };
