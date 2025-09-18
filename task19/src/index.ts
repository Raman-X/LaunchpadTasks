import express, { Request, Response } from "express";
import connectDB from "./config/database";
import { PORT } from "./config/env";

(() => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  connectDB();

  app.get("/", (req: Request, res: Response) => {
    res.send("Testing routes");
  });

  app.all(/.*/, (req: Request, res: Response) => {
    res.status(404).send("404 Not Found");
  });

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
})();
