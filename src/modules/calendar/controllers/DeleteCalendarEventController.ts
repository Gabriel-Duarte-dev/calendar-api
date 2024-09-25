import { DeleteCalendarEventUseCase } from "../useCases/DeleteCalendarEventUseCase";
import { Request, Response } from "express";

export class DeleteCalendarEventController {
  async handle(req: Request, res: Response) {
    const { eventId } = req.params;

    const deleteCalendarEventUseCase = new DeleteCalendarEventUseCase();

    try {
      const result = await deleteCalendarEventUseCase.execute(eventId);

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error delete event: ", error);
      return res.status(500).json({ error });
    }
  }
}
