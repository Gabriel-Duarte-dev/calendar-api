import { UpdateCalendarEventUseCase } from "../useCases/UpdateCalendarEventUseCase";
import { Request, Response } from "express";
import { CreatEventDTO } from "../dtos/calendar";

export class UpdateCalendarEventController {
  async handle(req: Request, res: Response) {
    const data = req.body as CreatEventDTO;

    const updateCalendarEventUseCase = new UpdateCalendarEventUseCase();

    try {
      const result = await updateCalendarEventUseCase.execute(data);

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error update event: ", error);
      return res.status(500).json({ error });
    }
  }
}
