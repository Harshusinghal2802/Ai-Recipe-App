import express from "express";

import {
  createRecipe,
  getRecipes,
  getRecipeById,
  getMyRecipes,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();


// CREATE RECIPE
router.post("/", protect, createRecipe);


// GET ALL RECIPES
router.get("/", getRecipes);


// MY RECIPES
router.get("/my-recipes", protect, getMyRecipes);


// GET SINGLE RECIPE
router.get("/:id", getRecipeById);


// UPDATE RECIPE
router.put("/:id", protect, updateRecipe);


// DELETE RECIPE
router.delete("/:id", protect, deleteRecipe);

export default router;