import { Request, Response } from "express";
import { oAuth2Client } from "../../../config/oAuth";

export class AuthenticateCalendarController {
  async handle(req: Request, res: Response) {
    const url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/calendar",
      include_granted_scopes: true,
      redirect_uri: "http://localhost:8000/calendar/google/redirect",
      client_id: process.env.GOOGLE_CLIENT_ID,
    });

    return res.redirect(url);
  }
}
