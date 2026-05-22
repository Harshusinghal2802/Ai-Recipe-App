import { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Clock3,
  ChefHat,
  Sparkles,
  Soup,
  ImagePlus,
  FileText,
} from "lucide-react";

export default function AddRecipe() {
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    recipeName: "",
    chefName: "",
    cookingTime: "",
    category: "",
    ingredients: "",
    instructions: "",
    difficulty: "",
    servings: "",
    coverImage: null,
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE IMAGE
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        coverImage: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.recipeName.trim()) {
      newErrors.recipeName = "Recipe name required";
    }

    if (!formData.chefName.trim()) {
      newErrors.chefName = "Chef name required";
    }

    if (!formData.cookingTime.trim()) {
      newErrors.cookingTime = "Cooking time required";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients required";
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = "Instructions required";
    }

    if (!formData.coverImage) {
      newErrors.coverImage = "Cover image required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);

      /*
      ====================================
      BACKEND API HERE
      ====================================

      const data = new FormData();

      data.append("recipeName", formData.recipeName);
      data.append("chefName", formData.chefName);
      data.append("cookingTime", formData.cookingTime);
      data.append("category", formData.category);
      data.append("ingredients", formData.ingredients);
      data.append("instructions", formData.instructions);
      data.append("difficulty", formData.difficulty);
      data.append("servings", formData.servings);
      data.append("coverImage", formData.coverImage);

      axios.post("/api/recipes", data)

      */
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 overflow-hidden relative">
      
      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-5 sm:p-8 lg:p-12 shadow-2xl relative z-10"
      >
        
        {/* HEADER */}
        <div className="text-center">
          
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto shadow-2xl">
            <ChefHat size={45} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-black mt-8">
            Add Your Recipe
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Share your delicious recipe with the RecipeAI community.
            Add ingredients, instructions, cooking time, cover image,
            and make your food famous.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-8"
        >
          
          {/* IMAGE */}
          <div className="flex flex-col items-center">
            
            <label className="relative cursor-pointer group">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImage}
              />

              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    className="w-full max-w-md h-64 object-cover rounded-[30px] border-4 border-orange-500 shadow-2xl"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[30px] flex items-center justify-center">
                    <ImagePlus size={40} />
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-md h-64 rounded-[30px] border-2 border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center hover:border-orange-500 transition-all duration-300">
                  <Upload size={50} className="text-orange-500" />

                  <p className="mt-5 text-lg font-semibold">
                    Upload Cover Image
                  </p>

                  <span className="text-gray-400 text-sm mt-2">
                    JPG, PNG, WEBP
                  </span>
                </div>
              )}
            </label>

            {errors.coverImage && (
              <p className="text-red-400 mt-3">
                {errors.coverImage}
              </p>
            )}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* RECIPE NAME */}
            <div>
              <label className="text-sm text-gray-300 mb-3 block">
                Recipe Name
              </label>

              <div className="relative">
                <Soup
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type="text"
                  name="recipeName"
                  value={formData.recipeName}
                  onChange={handleChange}
                  placeholder="Creamy Pasta..."
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 outline-none focus:border-orange-500 transition-all duration-300"
                />
              </div>

              {errors.recipeName && (
                <p className="text-red-400 mt-2 text-sm">
                  {errors.recipeName}
                </p>
              )}
            </div>

            {/* CHEF NAME */}
            <div>
              <label className="text-sm text-gray-300 mb-3 block">
                Chef Name
              </label>

              <div className="relative">
                <ChefHat
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type="text"
                  name="chefName"
                  value={formData.chefName}
                  onChange={handleChange}
                  placeholder="Chef Harsh..."
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 outline-none focus:border-orange-500 transition-all duration-300"
                />
              </div>

              {errors.chefName && (
                <p className="text-red-400 mt-2 text-sm">
                  {errors.chefName}
                </p>
              )}
            </div>

            {/* COOKING TIME */}
            <div>
              <label className="text-sm text-gray-300 mb-3 block">
                Cooking Time
              </label>

              <div className="relative">
                <Clock3
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                  size={20}
                />

                <input
                  type="text"
                  name="cookingTime"
                  value={formData.cookingTime}
                  onChange={handleChange}
                  placeholder="30 Minutes"
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-12 pr-4 outline-none focus:border-orange-500 transition-all duration-300"
                />
              </div>

              {errors.cookingTime && (
                <p className="text-red-400 mt-2 text-sm">
                  {errors.cookingTime}
                </p>
              )}
            </div>

            {/* CATEGORY */}
            <div>
              <label className="text-sm text-gray-300 mb-3 block">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-4 outline-none focus:border-orange-500 transition-all duration-300"
              >
                <option className="bg-black">Select Category</option>
                <option className="bg-black">Fast Food</option>
                <option className="bg-black">Dessert</option>
                <option className="bg-black">Healthy</option>
                <option className="bg-black">Indian</option>
                <option className="bg-black">Italian</option>
              </select>
            </div>

            {/* DIFFICULTY */}
            <div>
              <label className="text-sm text-gray-300 mb-3 block">
                Difficulty
              </label>

              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-4 outline-none focus:border-orange-500 transition-all duration-300"
              >
                <option className="bg-black">Select Difficulty</option>
                <option className="bg-black">Easy</option>
                <option className="bg-black">Medium</option>
                <option className="bg-black">Hard</option>
              </select>
            </div>

            {/* SERVINGS */}
            <div>
              <label className="text-sm text-gray-300 mb-3 block">
                Servings
              </label>

              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                placeholder="4"
                className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-4 outline-none focus:border-orange-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* INGREDIENTS */}
          <div>
            <label className="text-sm text-gray-300 mb-3 block">
              Ingredients
            </label>

            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="6"
              placeholder="Enter ingredients..."
              className="w-full rounded-3xl bg-white/5 border border-white/10 p-5 outline-none focus:border-orange-500 transition-all duration-300"
            ></textarea>

            {errors.ingredients && (
              <p className="text-red-400 mt-2 text-sm">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* INSTRUCTIONS */}
          <div>
            <label className="text-sm text-gray-300 mb-3 block">
              Full Cooking Instructions
            </label>

            <div className="relative">
              <FileText
                className="absolute left-5 top-5 text-orange-500"
                size={22}
              />

              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="8"
                placeholder="Write complete cooking process..."
                className="w-full rounded-3xl bg-white/5 border border-white/10 p-5 pl-14 outline-none focus:border-orange-500 transition-all duration-300"
              ></textarea>
            </div>

            {errors.instructions && (
              <p className="text-red-400 mt-2 text-sm">
                {errors.instructions}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full h-16 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-lg shadow-2xl flex items-center justify-center gap-3"
          >
            <Sparkles size={22} />
            Publish Recipe
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}