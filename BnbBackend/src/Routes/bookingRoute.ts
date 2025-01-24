import { Router } from "express";
import { sendBookingEmail } from "../Controllers/emailController";

const bookingRoute = Router();

// POST route
bookingRoute.post("/booking", sendBookingEmail);

export default bookingRoute;
