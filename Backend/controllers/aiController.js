import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

export const generateRecipe =
  async (req, res) => {
    try {
      const {
        ingredients,
        cuisine,
      } = req.body;

      const model =
        genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });

      const prompt = `
Generate recipe using:

Ingredients: ${ingredients}

Cuisine: ${cuisine}

Return:
Title
Ingredients
Instructions
`;

      const result =
        await model.generateContent(
          prompt
        );

      const response =
        result.response.text();

      res.json({
        recipe: response,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  