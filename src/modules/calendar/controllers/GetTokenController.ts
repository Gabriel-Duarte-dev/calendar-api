import { Request, Response } from "express";

export class GetTokenController {
  async handle(req: Request, res: Response) {
    if (!req.session) {
      return res.status(500).send("Session not initialized");
    }

    console.info(req.session);
    const tokens = req.session.tokens;

    if (tokens) {
      return res.json({
        access_token: tokens.access_token,
      });
    }

    return res.status(401).send("Not authenticated");
  }
}
