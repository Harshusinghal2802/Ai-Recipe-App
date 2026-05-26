import { Link } from "react-router-dom";

import { useContext } from "react";

import { FaHeart } from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

const RecipeCard = ({ recipe }) => {
  const {
    userInfo,
    favorites,
    addFavorite,
    removeFavorite,
  } = useContext(AuthContext);

  const isOwner =
    userInfo &&
    recipe.createdBy?._id === userInfo._id;

  const isFavorite = favorites.find(
    (item) => item._id === recipe._id
  );

  const favoriteHandler = () => {
    if (isFavorite) {
      removeFavorite(recipe._id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="card-img-top"
          style={{
            height: "250px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{recipe.title}</h5>

            <FaHeart
              onClick={favoriteHandler}
              style={{
                cursor: "pointer",
                color: isFavorite ? "red" : "gray",
                fontSize: "22px",
              }}
            />
          </div>

          <p>
            By: {recipe.createdBy?.name}
          </p>

          <div className="d-flex gap-2 flex-wrap">
            <Link
              to={`/recipe/${recipe._id}`}
              className="btn btn-dark"
            >
              View
            </Link>

            {isOwner && (
              <Link
                to={`/edit-recipe/${recipe._id}`}
                className="btn btn-warning"
              >
                Edit
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;