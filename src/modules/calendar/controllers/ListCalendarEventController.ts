import { Request, Response } from "express";
import { ListCalendarEventUseCase } from "../useCases/ListCalendarEventUseCase";

export class ListCalendarEventController {
  async handle(req: Request, res: Response) {
    const listCalendarEventUseCase = new ListCalendarEventUseCase();

    try {
      const result = await listCalendarEventUseCase.execute();

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error list events: ", error);
      return res.status(500).json({ error });
    }
  }
}
