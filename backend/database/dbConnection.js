import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI is not defined in .env file");
    process.exit(1);
  }

  mongoose.connect(uri, {
    dbName: "RESERVATIONS", // Optional if db name not in URI
  }).then(() => {
    console.log("✅ MongoDB connected successfully!");
  }).catch((err) => {
    console.error("❌ Error while connecting to database:", err);
  });
};
