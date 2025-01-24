import bodyParser from "body-parser";
import express, { json } from "express";
import cors from 'cors'
import bookingRoute from "./Routes/bookingRoute";
import enquiryRoute from "./Routes/enquiryRoute";

const app = express();

app.use(cors());
app.use(express.json());

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("", bookingRoute);
app.use("", enquiryRoute)

app.listen(4000, () => {
  console.log("Server Running...");
});
