import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt; // get token from cookie

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { _id: decoded.userId || decoded._id };

  
    req.user = await User.findById(decoded.userId).select("-password");

    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid or expired" });
  }
};

export default protectRoute;
