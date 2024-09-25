export interface CreatEventDTO {
  id: string;
  summary: string;
  description: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
}

export interface UpdateEventDTO {
  eventId: string;
}
