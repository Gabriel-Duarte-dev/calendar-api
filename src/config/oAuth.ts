import { google } from "googleapis";

export const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET_KEY,
  "http://localhost:8000/calendar/google/redirect"
);
