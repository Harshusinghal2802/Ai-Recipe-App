import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditRecipe from "./pages/EditRecipe";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import CreateRecipe from "./pages/CreateRecipe";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favorites";
import AIRecipe from "./pages/AIRecipe";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
  path="/edit-recipe/:id"
  element={
    <ProtectedRoute>
      <EditRecipe />
    </ProtectedRoute>
  }
/>
        <Route path="/" element={<Home />} />
        

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/recipes" element={<Recipes />} />

        <Route path="/recipe/:id" element={<RecipeDetail />} />
<Route
  path="/create"
  element={
    <ProtectedRoute>
      <CreateRecipe />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-recipes"
  element={
    <ProtectedRoute>
      <MyRecipes />
    </ProtectedRoute>
  }
/>

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/ai-recipe" element={<AIRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;