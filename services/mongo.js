import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('connected to db');
    return connection;
  } catch (error) {
    throw error;
  }
}
