import { Request, Response } from "express";
import { oAuth2Client } from "../../../config/oAuth";

export class GoogleRedirectController {
  async handle(req: Request, res: Response) {
    const token = req.query.code;

    try {
      const { tokens } = await oAuth2Client.getToken(token);
      oAuth2Client.setCredentials(tokens);

      if (!req.session) {
        return res.status(500).send("Session not initialized");
      }

      req.session.tokens = tokens;
      req.session.save((err) => {
        if (err) {
          console.error("Error saving session:", err);
          return res.status(500).send("Error saving session");
        }
        console.log("Tokens armazenados na sessão:", req.session.tokens);
        return res.redirect("http://localhost:5173");
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}
