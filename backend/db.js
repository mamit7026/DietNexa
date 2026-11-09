const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dietnexa_crm";

  if (isConnected) {
    console.log("ℹ️ MongoDB already connected.");
    return;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    console.log("⚠️ If your local MongoDB service is not started, please start it or provide a MongoDB Atlas URI in backend/.env (MONGO_URI).");
  }
}

mongoose.connection.on("disconnected", () => {
  isConnected = false;
  console.log("⚠️ MongoDB disconnected. Attempting reconnect...");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection event error:", err.message);
});

module.exports = { connectDB, mongoose };

