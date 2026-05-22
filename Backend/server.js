import express from "express";
import cors from "cors";
import dns from "dns";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

// ✅ Route Imports
import user from "./routes/user.js";
import Recipe from "./routes/Recipe.js";

// ✅ Load ENV
dotenv.config();

// ✅ DNS Fix
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

// ======================
// DATABASE CONNECT
// ======================
connectDB();

// ======================
// MIDDLEWARES
// ======================
app.use(cors());
app.use(express.json());

// ======================
// ROUTES
// ======================
app.use("/api/auth", user);

app.use("/api/recipes", Recipe);

// ======================
// TEST ROUTE
// ======================
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

// ======================
// SERVER
// ======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});