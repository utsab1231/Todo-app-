import { mongoose } from "mongoose";
import { DB_NAME } from "../utils/constants.js";
import { apiError } from "../utils/jsonGenerator.js";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(apiError(500, error.message));
  }
}

export default connectDB;
