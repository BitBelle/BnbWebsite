import { Router } from "express";
import { sendEnquiryEmail } from "../Controllers/enquiryController";

const enquiryRoute = Router();

//POST route
enquiryRoute.post("/enquiry", sendEnquiryEmail);

export default enquiryRoute;
