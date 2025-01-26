import mongoose from "mongoose";

if(!process.env.DATABASE_URL) throw new Error("connection string does not provided");

const URL=process.env.DATABASE_URL;
const connectToDatabase=async ():Promise<typeof mongoose>=>{
  if(mongoose.connection.readyState===1){
    return mongoose;
  }
    
    try {
        
        await mongoose.connect(URL)
        console.log("database connected");
        return mongoose;
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

export default connectToDatabase;