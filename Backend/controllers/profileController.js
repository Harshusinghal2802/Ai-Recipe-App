import User from "../models/User.js";
import Recipe from "../models/Recipe.js";

export const getProfile =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      const recipes =
        await Recipe.find({
          creator: req.user.id,
        });

      res.json({
        user,
        recipes,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };