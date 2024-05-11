import { Router, Response, Request } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

export { routes };
