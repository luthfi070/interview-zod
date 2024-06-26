import express from "express";
import indexRoute from "./routes";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const port = 3070;
const app = express();
let dbUrl: string = process.env.DB_URL || "";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "webservice running",
  });
});

app.use(indexRoute);

mongoose.connect(dbUrl).then(() => {
  console.log("connected to database");
});

app.listen(port, () => {
  console.log(`Webservice running in port ${port}`);
});

export default app;
