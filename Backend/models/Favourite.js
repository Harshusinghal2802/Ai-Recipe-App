import mongoose from "mongoose";

const favouriteSchema =
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  });

export default mongoose.model(
  "Favourite",
  favouriteSchema
);