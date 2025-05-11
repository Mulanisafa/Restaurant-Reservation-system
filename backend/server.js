// import app from "./app.js";

// app.listen(process.env.PORT, ()=>{
//     console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
// })

// server.js

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // frontend origin
    credentials: true,
  })
);

// Reservation POST route
app.post("/reservation/send", (req, res) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  console.log("Reservation received:", req.body);

  // You could save to a DB here instead
  return res.status(200).json({ message: "Reservation successful!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

