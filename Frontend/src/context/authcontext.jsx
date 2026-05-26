import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

const [favorites, setFavorites] = useState([]);
  useEffect(() => {
  const user = localStorage.getItem("userInfo");

  if (user) {
    setUserInfo(JSON.parse(user));
  }

  const favs = localStorage.getItem("favorites");

  if (favs) {
    setFavorites(JSON.parse(favs));
  }
}, []);

  // LOGIN
  const login = (data) => {
    localStorage.setItem("userInfo", JSON.stringify(data));

    setUserInfo(data);
  };
// ADD FAVORITE
const addFavorite = (recipe) => {
  const alreadyExists = favorites.find(
    (item) => item._id === recipe._id
  );

  if (alreadyExists) return;

  const updatedFavorites = [...favorites, recipe];

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
};




// REMOVE FAVORITE
const removeFavorite = (id) => {
  const updatedFavorites = favorites.filter(
    (item) => item._id !== id
  );

  setFavorites(updatedFavorites);

  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
};
  // LOGOUT
  const logout = () => {
    localStorage.removeItem("userInfo");

    setUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
  userInfo,
  login,
  logout,
  favorites,
  addFavorite,
  removeFavorite,
}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;