import "dotenv/config";
import { Router, Response, Request } from "express";
import { google } from "googleapis";

const routes = Router();
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET_KEY,
  "http://localhost:8000/"
);

routes.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

routes.post("/auth/google", async (req: Request, res: Response) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code);
  console.log(tokens);

  return res.json(tokens);
});

routes.post("/creat-event", async (req: Request, res: Response) => {
  const {
    summary,
    description,
    location,
    startDateTime,
    endDateTime,
    refresh_token,
  } = req.body;

  oAuth2Client.setCredentials({ refresh_token });

  const calendar = google.calendar("v3");

  try {
    const response = await calendar.events.insert({
      auth: oAuth2Client,
      calendarId: "primary",
      requestBody: {
        summary,
        description,
        location,
        colorId: "1",
        start: {
          dateTime: new Date(startDateTime).toISOString(),
        },
        end: {
          dateTime: new Date(endDateTime).toISOString(),
        },
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.error("Error creating event: ", error);
    res.status(500).send("Error creating event");
  }
});

export { routes };
