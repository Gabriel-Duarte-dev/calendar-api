import { CreatCalendarEventUseCase } from "./../useCases/CreatCalendarEventUseCase";
import { Request, Response } from "express";
import { CreatEventDTO } from "../dtos/calendar";

export class CreatCalendarEventController {
  async handle(req: Request, res: Response) {
    const data = req.body as CreatEventDTO;

    const creatCalendarEventUseCase = new CreatCalendarEventUseCase();

    try {
      const result = await creatCalendarEventUseCase.execute(data);

      return res.status(200).json(result);
    } catch (error) {
      console.error("Error creating event: ", error);
      return res.status(500).json({ error });
    }
  }
}
