import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  addFavourite,
  getFavourites,
} from "../controllers/favouriteController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  addFavourite
);

router.get(
  "/",
  authMiddleware,
  getFavourites
);

export default router;