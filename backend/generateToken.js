import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // Set the token in a secure cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only use secure cookies in production
    sameSite: "None", // For cross-origin requests (make sure CORS is configured properly)
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiry (30 days)
  });
};

export default generateToken;