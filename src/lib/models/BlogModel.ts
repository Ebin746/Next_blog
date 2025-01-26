import mongoose, { Schema, Document, Model } from "mongoose";
import connectToDatabase from "../config/dB";

// Define the Blog interface
export interface IBlog extends Document {
  title: string;
  description: string;
  author: string;
  category: string;
  date: Date;
  image: string;
  authorImg: string;
}

// Define the Blog schema
const BlogSchema: Schema<IBlog> = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, required: true },
  authorImg: { type: String, required: false },
});

// Initialize the model after ensuring the database connection
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

// Export the model wrapped in the database connection logic
export default async function getBlogModel() {
  if (mongoose.connection.readyState !== 1) {
    await connectToDatabase();
  }
  return Blog;
}
