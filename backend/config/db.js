import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.MONGODB_URI;

if (!DB_URI) {
  console.error("MONGODB_URI is not defined in .env file");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected successfully 👌");
  } catch (err) {
    console.error("MongoDB connection failed", err.message);
    process.exit(1);
  }
};

export default connectDB;
