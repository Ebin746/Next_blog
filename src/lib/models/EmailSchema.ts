import mongoose, { Schema, Model, Document } from "mongoose";
import connectToDatabase from "../config/dB";

export interface IEmailDocument extends Document {
    email: string;
    feedback: string;
}

const EmailSchema: Schema<IEmailDocument> = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    }
});

const Email:Model<IEmailDocument> = mongoose.models.Email || mongoose.model<IEmailDocument>("Email", EmailSchema);

export default async function getEmailModel() {
    if (mongoose.connection.readyState !== 1) {
        await connectToDatabase();
    }
    return Email;
}
