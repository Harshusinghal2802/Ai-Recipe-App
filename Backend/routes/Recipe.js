import express from "express";

import {
  getRecipes,
  createRecipe,
} from "../controllers/Recipe.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRecipes);

router.post("/", protect, createRecipe);

export default router;