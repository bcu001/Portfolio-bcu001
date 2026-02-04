import express, { Application, Request, Response } from "express";
import { ENV } from "./config/env";

const app: Application = express();

const PORT = ENV.PORT;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Portfolio backend",
  });
});

app.listen(PORT, () => {
  console.log(`server is running live at http://localhost:${PORT}`);
});
