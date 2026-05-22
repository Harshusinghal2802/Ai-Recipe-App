import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    ingredients: [
      {
        type: String,
      },
    ],

    instructions: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "General",
    },

    cookingTime: {
      type: String,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    ratings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model(
  "Recipe",
  recipeSchema
);

export default Recipe;