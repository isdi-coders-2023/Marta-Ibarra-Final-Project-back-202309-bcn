import { type NextFunction, type Request, type Response } from "express";
import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import type CustomError from "../../CustomError/CustomError";

const debug = debugCreator("src:final-project:server:middlewares:errors");

const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const privateMessage = error.customMessage ?? error.message;
  debug(chalk.redBright("Error:", privateMessage));

  res.status(statusCode).json({ message: privateMessage });
};

export default generalError;
