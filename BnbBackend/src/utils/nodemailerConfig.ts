import nodemailer from "nodemailer";
import dotenv from "dotenv";

//loading env variables
dotenv.config();

// Function to create a transporter
const createTransporter = () => {
  return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true, // to use SSL
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
      },
  });
};

export default createTransporter;