import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age:{
      type: Number,
      required: true,
    },
    Account: {
      type: String,
      required: true,
      match: /^[0-9]{11}$/, // Validates exactly 11 digits
    },
    
    IFSC: {
      type: String,
      required: true,
      match: /^[A-Z]{4}0[A-Z0-9]{6}$/, // Example pattern for IFSC code (4 letters, 1 digit, 6 alphanumeric)
    },
    bankName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    profileImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
