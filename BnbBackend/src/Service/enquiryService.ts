import ejs from "ejs";
import path from "path";
import createTransporter from "../utils/nodemailerConfig";
import { EnquiryData } from "../Models/enquiry";

export const sendEnquiryNotification = async (enquiryData: EnquiryData) => {
    // console.log(enquiryData);

    const {fullname, email, phone, enquiry, message} = enquiryData;

    //absolute path to views folder
    const templatePath = path.join(process.cwd(), "src", "Views", "enquiryTemplate.ejs");
    // console.log(templatePath);
    
    const emailContent = await ejs.renderFile(templatePath, {fullname, email, phone, enquiry, message})
    const transporter = createTransporter();
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "mercywainaina47@gmail.com",
        subject: "New Enquiry",
        html: emailContent,
    });
}