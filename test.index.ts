import express from "express";
import indexRoute from "./routes";
import "dotenv/config";
import mongoose from "mongoose";

const port = 3070;
const app = express();
let dbUrl: string = process.env.DB_URL || "";

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "webservice running",
  });
});

app.use(indexRoute);

mongoose.connect(dbUrl);

export default app;
