import { motion } from "framer-motion";
import {
  Sparkles,
  ChefHat,
  Heart,
  Copy,
  ArrowRight,
  Star,
  Clock3,
} from "lucide-react";

// COMPONENTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const recipes = [
  {
    id: 1,
    title: "Creamy Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    time: "20 Min",
  },
  {
    id: 2,
    title: "Healthy Salad",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
    time: "10 Min",
  },
  {
    id: 3,
    title: "Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    time: "30 Min",
  },
  {
    id: 4,
    title: "Pizza Special",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    time: "25 Min",
  },
  {
    id: 5,
    title: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    time: "40 Min",
  },
  {
    id: 6,
    title: "Spicy Noodles",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
    time: "15 Min",
  },
];

const chefs = [
  {
    name: "Sophia",
    role: "Italian Chef",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel",
    role: "Burger Expert",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma",
    role: "Dessert Chef",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James",
    role: "Asian Chef",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Olivia",
    role: "Healthy Food",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        
        {/* BG BLUR */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center py-20 relative z-10">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-500 font-semibold shadow-lg">
              <Sparkles size={18} />
              AI Powered Recipes
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mt-7">
              Create Amazing Recipes With{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                RecipeAI
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg mt-7 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Generate AI recipes instantly, explore trending meals,
              discover talented chefs, and build your favorite food
              collection with a modern cooking experience.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">
              
              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Recipes
              </button>

              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 font-semibold transition-all duration-300">
                Share Your Recipes
              </button>
            </div>

            {/* USERS */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-12">
              
              <div className="flex -space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-14 h-14 rounded-full border-4 border-white dark:border-black object-cover"
                />

                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-14 h-14 rounded-full border-4 border-white dark:border-black object-cover"
                />

                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  className="w-14 h-14 rounded-full border-4 border-white dark:border-black object-cover"
                />
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  10K+ Happy Food Lovers
                </h3>

                <p className="text-gray-500">
                  Recipes created by our community
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[40px] shadow-2xl w-full h-[350px] sm:h-[500px] lg:h-[650px] object-cover"
            />

            {/* FLOATING CARD */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -bottom-5 left-4 sm:left-8 bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                  <ChefHat size={26} />
                </div>

                <div>
                  <h2 className="font-bold text-lg">
                    AI Cooking Assistant
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Generate recipes instantly
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRENDING RECIPES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-14">
            
            <h2 className="text-4xl sm:text-5xl font-black">
              Trending Recipes
            </h2>

            <button className="flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
              View All
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="flex gap-8 w-max"
            >
              {[...recipes, ...recipes].map((recipe, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="min-w-[300px] sm:min-w-[340px] bg-white dark:bg-gray-900 rounded-[35px] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group"
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={recipe.image}
                      className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Clock3 size={16} />
                      {recipe.time}
                    </div>
                  </div>

                  <div className="p-6">
                    
                    <div className="flex items-center gap-1 text-yellow-500 mb-3">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>

                    <h3 className="text-2xl font-black">
                      {recipe.title}
                    </h3>

                    <p className="text-gray-500 mt-3">
                      Delicious recipe generated with modern AI cooking experience.
                    </p>

                    <div className="flex items-center justify-between mt-7">
                      
                      <button className="flex items-center gap-2 text-red-500 hover:scale-110 transition-all">
                        <Heart size={18} />
                        Favorite
                      </button>

                      <button className="flex items-center gap-2 text-orange-500 hover:scale-110 transition-all">
                        <Copy size={18} />
                        Copy
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHEFS */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-16">
            
            <h2 className="text-4xl sm:text-5xl font-black">
              Popular Chefs
            </h2>

            <button className="flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
              View All
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-[35px] p-6 shadow-2xl border border-gray-100 dark:border-gray-800 text-center group"
              >
                <div className="relative w-fit mx-auto">
                  <img
                    src={chef.image}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 group-hover:scale-105 transition-all duration-300"
                  />

                  <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></div>
                </div>

                <h3 className="font-black text-xl mt-5">
                  {chef.name}
                </h3>

                <p className="text-orange-500 mt-2 text-sm font-semibold">
                  {chef.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-4xl sm:text-5xl font-black text-center mb-16">
            How It Works
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">
            
            {[
              {
                id: "1",
                title: "AI Recipe Generator",
                desc:
                  "Enter ingredients or food ideas and AI instantly creates delicious recipes.",
                color: "from-orange-500 to-red-500",
              },
              {
                id: "2",
                title: "Explore Community",
                desc:
                  "Discover amazing meals shared by chefs and food lovers.",
                color: "from-pink-500 to-rose-500",
              },
              {
                id: "3",
                title: "Save & Copy Recipes",
                desc:
                  "Favorite recipes, copy ingredients, and build your collection.",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[35px] bg-white dark:bg-gray-900 p-10 shadow-2xl border border-gray-100 dark:border-gray-800"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-2xl font-black shadow-xl`}
                >
                  {item.id}
                </div>

                <h3 className="text-3xl font-black mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-5 leading-relaxed">
                  {item.desc}
                </p>

                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-orange-500/5"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}