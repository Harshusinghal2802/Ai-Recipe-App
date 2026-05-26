import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { generateRecipe } from "../controllers/aiController.js";

const router = express.Router();

router.post(
  "/generate",
  authMiddleware,
  generateRecipe
);

export default router;