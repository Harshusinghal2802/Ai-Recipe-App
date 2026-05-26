import User from "../models/User.js";

import Recipe from "../models/Recipe.js";


// ======================
// ADD FAVORITE
// ======================

export const addFavorite = async (
  req,
  res
) => {

  try {

    const user =
      await User.findById(req.user.id);

    const recipe =
      await Recipe.findById(req.params.id);

    if (!recipe) {

      return res.status(404).json({
        message: "Recipe not found",
      });

    }

    // already exists
    if (
      user.favorites.includes(recipe._id)
    ) {

      return res.status(400).json({
        message: "Already added",
      });

    }

    user.favorites.push(recipe._id);

    await user.save();

    res.status(200).json({
      message: "Added to favorites",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ======================
// REMOVE FAVORITE
// ======================

export const removeFavorite =
  async (req, res) => {

    try {

      const user =
        await User.findById(req.user.id);

      user.favorites =
        user.favorites.filter(
          (fav) =>
            fav.toString() !==
            req.params.id
        );

      await user.save();

      res.status(200).json({
        message:
          "Removed from favorites",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };


// ======================
// GET FAVORITES
// ======================

export const getFavorites =
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.user.id
        ).populate("favorites");

      res.status(200).json(
        user.favorites
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };