import mongoose, { Document, Model, Schema, Types } from "mongoose";
import connectToDatabase from "../config/dB";

// Define the User interface
interface IUser extends Document {
  email: string;
  password: string;
  myBlogs: Types.ObjectId[]; // Array of ObjectIds referring to Blog
}

// Define the User schema
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  myBlogs: [{ type: Types.ObjectId, ref: 'Blog' }], // Reference to Blog model
});

// Ensure the model is only created once
const User: Model<IUser> = mongoose.models.User || mongoose.model("User", userSchema);

export default async function getUserSchema() {
  // Check if the database is connected before returning the model
  if (mongoose.connection.readyState !== 1) {
    try {
      await connectToDatabase();
      console.log("Connected to database");
    } catch (error) {
      console.error("Error connecting to database:", error);
      throw new Error("Database connection failed");
    }
  }

  return User;
}
