import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import hotelRoute from './routes/hotels.js'


const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Offline!");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Online!");
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/hotels', hotelRoute);


app.listen(5000, () => {
    connect();
    console.log("Connected to backend.");
  });
