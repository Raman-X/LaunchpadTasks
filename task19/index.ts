import express, { Request, Response } from "express";

(() => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req: Request, res: Response) => {
    res.send("Testing routes");
  });

  app.all(/.*/, (req: Request, res: Response) => {
    res.status(404).send("404 Not Found");
  });

  app.listen(5000, () => {
    console.log("App running on port 5000");
  });
})();
