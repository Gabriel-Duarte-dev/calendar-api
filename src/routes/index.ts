import { Router, Response, Request } from "express";
import { calendarRoutes } from "./calendar.routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

routes.use("/calendar", calendarRoutes);

export { routes };
