import { google } from "googleapis";
import { oAuth2Client } from "../../../config/oAuth";
import { CreatEventDTO } from "../dtos/calendar";

export class CreatCalendarEventUseCase {
  constructor() {}

  async execute({
    summary,
    description,
    location,
    startDateTime,
    endDateTime,
  }: CreatEventDTO) {
    const calendar = google.calendar("v3");

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

    return response;
  }
}
