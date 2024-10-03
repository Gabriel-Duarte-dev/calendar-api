import { google } from "googleapis";
import { oAuth2Client } from "../../../config/oAuth";

export class ListCalendarEventUseCase {
  constructor() {}

  async execute() {
    const calendar = google.calendar("v3");

    const response = await calendar.events.list({
      auth: oAuth2Client,
      calendarId: "primary",
    });

    return response;
  }
}
