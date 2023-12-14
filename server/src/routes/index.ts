import { Application, Request, Response } from "express";

const RoutesHandler = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "This is from server" });
  });
};

export default RoutesHandler;
