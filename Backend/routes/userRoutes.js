import express from "express";

import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../controllers/userController.js";

import  protect 
from "../middleware/authMiddleware.js";

const router = express.Router();


// ADD FAVORITE
router.post(
  "/favorites/:id",
  protect,
  addFavorite
);


// REMOVE FAVORITE
router.delete(
  "/favorites/:id",
  protect,
  removeFavorite
);


// GET FAVORITES
router.get(
  "/favorites",
  protect,
  getFavorites
);

export default router;