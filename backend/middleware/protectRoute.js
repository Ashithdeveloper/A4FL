import jwt from "jsonwebtoken";
import User from  "../models/User.model.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protectRoute = (req, res, next) => {
  const token = req.cookies.jwt; // Cookie!

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id: decoded.userId };
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid or expired" });
  }
};

export default protectRoute;
