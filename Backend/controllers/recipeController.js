import Recipe from "../models/Recipe.js";


// CREATE RECIPE
export const createRecipe = async (req, res) => {
  try {
    const { title, image, ingredients, instructions } =
      req.body;

    const recipe = await Recipe.create({
      title,
      image,
      ingredients,
      instructions,
      createdBy: req.user._id,
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET ALL RECIPES
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// GET SINGLE RECIPE
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
      .populate("createdBy", "name email");

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe Not Found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};// GET MY RECIPES
export const getMyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({
      createdBy: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// UPDATE RECIPE
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe Not Found",
      });
    }

    // OWNER CHECK
    if (
      recipe.createdBy.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    recipe.title =
      req.body.title || recipe.title;

    recipe.image =
      req.body.image || recipe.image;

    recipe.ingredients =
      req.body.ingredients || recipe.ingredients;

    recipe.instructions =
      req.body.instructions || recipe.instructions;

    const updatedRecipe = await recipe.save();

    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// DELETE RECIPE
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe Not Found",
      });
    }

    // OWNER CHECK
    if (
      recipe.createdBy.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await recipe.deleteOne();

    res.status(200).json({
      message: "Recipe Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};