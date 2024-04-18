import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./src/routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3026;

const allowedDomains = [
  "https://portfolio-v2-tojo-josephs-projects.vercel.app",
  "https://portfolio-v2-git-main-tojo-josephs-projects.vercel.app",
];
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (!origin || allowedDomains.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(
  cors({
    origin: ["https://portfolio-v2-tojo-josephs-projects.vercel.app"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json({ limit: "5mb" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

mongoose.connect(process.env.DATABASE_URL || "");

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
