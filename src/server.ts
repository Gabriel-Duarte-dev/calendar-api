import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "wlg2KxT9annH3a5HMPQUBmY7ZdJquZ87",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(process.env.PORT || 4000, () => {
  console.log("HTTP server runing in", process.env.PORT);
});
