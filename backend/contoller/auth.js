import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../generateToken.js";

export const signup = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debug log to check incoming data

    const {
      username,
      fullName,
      email,
      password,
      Account,
      bankName,
      IFSC,
      gender,
      phoneNumber,
      age,
      profileImg,
    } = req.body;

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(404).json({ error: "Invalid Email" });
    }

    // Check if user or username already exists
    const existingUser = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    if (existingUser || existingUsername) {
      return res
        .status(404)
        .json({ error: "Username or Email already exists" });
    }

    // Validate password length
    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password should be at least 8 characters long" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      username,
      fullName,
      email,
      age,
      phoneNumber,
      password: hashedPassword,
      Account,
      bankName,
      IFSC,
      gender,
      profileImg,
    });

    // Save the user to the database
    await newUser.save();

    // Generate token
    const token = generateToken(newUser._id);


    res.status(201).json({
      token,
      user: {
        _id: newUser._id,
        username: newUser.username,
        fullName: newUser.fullName,
        email: newUser.email,
        Account: newUser.Account,
        phoneNumber: newUser.phoneNumber,
        bankName: newUser.bankName,
        IFSC: newUser.IFSC,
        gender: newUser.gender,
        age: newUser.age,
        profileImg: newUser.profileImg,
      },
    
    });
  } catch (error) {
   
    if (error.name === "ValidationError") {
      console.log("Validation Error:", error.errors);
      return res.status(400).json({ error: error.message });
    }

    console.log("Server Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
  
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    // Validate user existence first
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Now it's safe to compare the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

   const token = generateToken(user._id);

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        Account: user.Account,
        phoneNumber: user.phoneNumber,
        bankName: user.bankName,
        IFSC: user.IFSC,
        gender: user.gender,
        age: user.age,
        profileImg: user.profileImg,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Logout successful (client handles token removal)" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id }).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log(`Error in getMe controller : ${error}`);
    res.status(500).json({ error: "Server Error" });
  }
};