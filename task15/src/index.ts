import dotenv from "dotenv";
import express, { Request, Response } from "express";
import router from "./routes";

(() => {
  const app = express();

  dotenv.config();

  const PORT = process.env.PORT || 8000;

  app.use(express.json());

  app.use("/api", router);

  app.all(/.*/, function (req: Request, res: Response) {
    res.status(404).json({ message: "Path not found" });
  });

  app.listen(PORT, () => {
    console.log(`The application is running at Port : ${PORT}`);
  });
})();
