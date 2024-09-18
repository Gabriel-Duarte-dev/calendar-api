import { GetTokenController } from "./../modules/calendar/controllers/GetTokenController";
import { GoogleRedirectController } from "./../modules/calendar/controllers/GoogleRedirectController";
import { CreatCalendarEventController } from "./../modules/calendar/controllers/CreatCalendarEventController";
import "dotenv/config";
import { Router } from "express";
import { AuthenticateCalendarController } from "../modules/calendar/controllers/AuthenticateCalendarController";

const authenticateCalendarController = new AuthenticateCalendarController();
const googleRedirectController = new GoogleRedirectController();
const getTokenController = new GetTokenController();
const creatCalendarEventController = new CreatCalendarEventController();

const calendarRoutes = Router();

calendarRoutes.get("/auth/google", authenticateCalendarController.handle);
calendarRoutes.get("/google/redirect", googleRedirectController.handle);
calendarRoutes.get("/get-token", getTokenController.handle);
calendarRoutes.post("/creat-event", creatCalendarEventController.handle);

export { calendarRoutes };
