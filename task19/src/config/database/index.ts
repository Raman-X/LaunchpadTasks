import mongoose from "mongoose";
import { MONGO_URI } from "../env";

async function connectDB() {
  if (!MONGO_URI) {
    console.log("mongo uri isn't defined");
    process.exit(1);
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log("mongodb connected");
  } catch (error: any) {
    console.log("connection error");
    process.exit(1);
  }
}

export default connectDB;
