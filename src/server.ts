import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import logger from "loglevel";
import { createConnection } from "typeorm";
import { getRoutes } from "./routes";

async function startServer({ port = process.env.PORT || 3001 } = {}) {
  const app = express();
  app.use("/api", getRoutes());
  app.use(errorMiddleware);

  await createConnection();
  const server = app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
}

function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    next(error);
  } else {
    logger.error(error);
    res.status(500);
    res.json({
      message: error.message,
      ...(process.env.NODE_ENV === "production"
        ? null
        : { stack: error.stack }),
    });
  }
}

export { startServer };
