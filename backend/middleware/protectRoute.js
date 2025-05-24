import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Not authorized, token is required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");


    if (!user) {
      return res.status(401).json({ error: "Not authorized, user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(`Failed to protect route: ${error.message}`);

    // Handle JWT errors with 401 instead of 500
    return res
      .status(401)
      .json({ error: "Not authorized, token invalid or expired" });
  }
};

export default protectRoute;
