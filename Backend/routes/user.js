import express from "express";

import {
  registerUser,
 loginUser,
  getAllUsers,
  getUser,
} from "../controllers/User.js";

const router = express.Router();


// USERS
router.get("/users", getAllUsers);

router.get("/users/:id", getUser);


// AUTH
router.post("/signup", registerUser);

router.post("/login", loginUser);

export default router;