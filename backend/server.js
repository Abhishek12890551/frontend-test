import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoute.js";
import preferencesRoutes from "./routes/preferencesRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 3000;

await connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", userRoutes);
app.use("/api", preferencesRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
