// src/models/Blog.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import connectToDatabase from "../config/dB"

// Define the Blog interface
export interface IBlog extends Document {
  title: string;
  description: string;
  author: string;
  category: string;
  date: Date;
}

// Define the Blog schema
const BlogSchema: Schema<IBlog> = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Initialize the model after ensuring the database connection
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

// Export the model wrapped in the database connection logic
export default async function getBlogModel() {
  await connectToDatabase();
  return Blog;
}
