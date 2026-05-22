import Recipes from "../models/Recipe.js";

// Get All Recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Recipe
export const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Recipe
export const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, time } = req.body;

    const newRecipe = await Recipes.create({
      name,
      ingredients,
      time,
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Recipe
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Recipe
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};