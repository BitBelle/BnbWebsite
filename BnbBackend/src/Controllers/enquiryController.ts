// controller focused on request and response

import { Request, Response} from "express";
import { sendEnquiryNotification } from "../Service/enquiryService";

export const sendEnquiryEmail = async (req: Request, res: Response) => {
  try {
    await sendEnquiryNotification(req.body)
    res.status(200).send({message: "Email Sent!"});
  } catch (error){
    console.error("Error occured: " + error)
    res.status(500).send({error})
  }
};
