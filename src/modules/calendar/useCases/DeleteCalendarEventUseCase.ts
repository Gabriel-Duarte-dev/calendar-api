import { google } from "googleapis";
import { oAuth2Client } from "../../../config/oAuth";

export class DeleteCalendarEventUseCase {
  constructor() {}

  async execute(eventId: string) {
    const calendar = google.calendar("v3");

    const response = await calendar.events.delete({
      auth: oAuth2Client,
      calendarId: "primary",
      eventId,
    });

    return response;
  }
}
