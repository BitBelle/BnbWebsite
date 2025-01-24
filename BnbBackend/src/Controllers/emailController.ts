
import { Request, Response } from "express";
import { sendBookingNotification } from "../Service/emailService";

export const sendBookingEmail = async (req: Request, res: Response) => {
  try {
    await sendBookingNotification(req.body)
    res.status(200).send({message: "Email Sent!"});
  } catch (error){
    console.error("Error occured: " + error)
    res.status(500).send({error})
  }
};
