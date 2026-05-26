import Recipe from "../models/Recipe.js";

// ======================
// ADD FAVOURITE
// ======================

export const addFavourite =
  async (req, res) => {

    try {

      const userId =
        req.user.id;

      const recipeId =
        req.body.recipeId;

      await Recipe.findByIdAndUpdate(
        recipeId,
        {
          $addToSet: {
            favourites:
              userId,
          },
        }
      );

      res.status(200).json({
        message:
          "Added to favourites",
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Error adding favourite",
        error,
      });

    }
  };

// ======================
// GET FAVOURITES
// ======================

export const getFavourites =
  async (req, res) => {

    try {

      const userId =
        req.user.id;

      const recipes =
        await Recipe.find({
          favourites:
            userId,
        });

      res.status(200).json(
        recipes
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Error fetching favourites",
        error,
      });

    }
  };