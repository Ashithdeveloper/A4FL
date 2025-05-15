import express from 'express';
import connectDB from './db/mongodb.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./Route/user.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;
app.use(
  express.json({
    limit: "30mb",
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true, // for parsing application/x-www-form-urlencoded
  })
);

app.use(
  cors({
    origin: ["https://a4fl.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

  
app.use("/api/auth",authRoute);

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
    connectDB();
});
