import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  let token;

  try {
    // Check token exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Find user
      req.user = await User.findById(decoded.id).select(
        "-password"
      );

      next();
    } else {
      return res.status(401).json({
        message: "Not Authorized, No Token",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Token Failed",
    });
  }
};

export default protect;