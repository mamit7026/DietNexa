import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dietnexa_crm";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        bufferCommands: false,
      })
      .then((mongooseInstance) => {
        return mongooseInstance;
      })
      .catch((err) => {
        console.warn("MongoDB connection warning:", err.message);
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
}

export default connectDB;

