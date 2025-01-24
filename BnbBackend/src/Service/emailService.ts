// email logic

import ejs from "ejs";
import { BookingData } from "../Models/booking";
import createTransporter from "../utils/nodemailerConfig";
import path from "path";

export const sendBookingNotification = async (bookingData: BookingData) => {
    console.log(bookingData);

    const {fullname, checkinDate, checkoutDate, email, phone, guests} = bookingData;

    //absolute path to views folder
    const templatePath = path.join(process.cwd(), "src", "Views", "emailTemplate.ejs");
    // console.log(templatePath);
    
    const emailContent = await ejs.renderFile(templatePath, {fullname, checkinDate, checkoutDate, email, phone, guests})
    
    const transporter = createTransporter();
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "mercywainaina47@gmail.com",
        subject: "New Booking",
        html: emailContent,
    });
    
}