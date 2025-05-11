import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// ✅ Load environment variables from .env
dotenv.config();

const app = express();

// ✅ Connect to database
dbConnection();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // Make sure FRONTEND_URL exists in .env
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

// Test route
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Error middleware
app.use(errorMiddleware);

export default app;
