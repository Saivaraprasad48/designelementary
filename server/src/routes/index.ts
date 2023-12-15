import { Application, Request, Response } from "express";
import useRoutes from "./userRoutes";
import remainderRoutes from "./remainderRoutes";

const RoutesHandler = (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "This is from server" });
  });

  app.use("/user", useRoutes);
  app.use("/remainder", remainderRoutes);
};

export default RoutesHandler;
