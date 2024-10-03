import { GetTokenController } from "./../modules/calendar/controllers/GetTokenController";
import { GoogleRedirectController } from "./../modules/calendar/controllers/GoogleRedirectController";
import { CreatCalendarEventController } from "./../modules/calendar/controllers/CreatCalendarEventController";
import { UpdateCalendarEventController } from "./../modules/calendar/controllers/UpdateCalendarEventController";
import { DeleteCalendarEventController } from "./../modules/calendar/controllers/DeleteCalendarEventController";
import { ListCalendarEventController } from "./../modules/calendar/controllers/ListCalendarEventController";
import "dotenv/config";
import { Router } from "express";
import { AuthenticateCalendarController } from "../modules/calendar/controllers/AuthenticateCalendarController";

const authenticateCalendarController = new AuthenticateCalendarController();
const googleRedirectController = new GoogleRedirectController();
const getTokenController = new GetTokenController();
const creatCalendarEventController = new CreatCalendarEventController();
const updateCalendarEventController = new UpdateCalendarEventController();
const deleteCalendarEventController = new DeleteCalendarEventController();
const listCalendarEventController = new ListCalendarEventController();
const calendarRoutes = Router();

calendarRoutes.get("/auth/google", authenticateCalendarController.handle);
calendarRoutes.get("/google/redirect", googleRedirectController.handle);
calendarRoutes.get("/get-token", getTokenController.handle);
calendarRoutes.get("/list-event", listCalendarEventController.handle);
calendarRoutes.post("/creat-event", creatCalendarEventController.handle);
calendarRoutes.put("/update-event", updateCalendarEventController.handle);
calendarRoutes.delete(
  "/delete-event/:eventId",
  deleteCalendarEventController.handle
);

export { calendarRoutes };
