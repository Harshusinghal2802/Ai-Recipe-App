import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dns from "dns";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

// DNS Fix
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

// ======================
// MIDDLEWARES
// ======================

app.use(express.json({ limit: "2mb" }));

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

// ======================
// STATIC FOLDER
// ======================

app.use("/uploads", express.static("uploads"));

// ======================
// ROUTES
// ======================

app.use("/api/auth", authRoutes);

app.use("/api/recipes", recipeRoutes);

// ======================
// TEST ROUTE
// ======================

app.get("/", (req, res) => {
  res.send("🚀 Recipe API Running...");
});

// ======================
// DATABASE CONNECTION
// ======================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err.message);
  });

// ======================
// SERVER
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});