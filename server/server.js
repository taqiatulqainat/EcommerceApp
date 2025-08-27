const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // ← loads .env before using process.env

const app = express();
app.use(express.json());
app.use(cors());

// Health route to verify server is up
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Mongo connection (async/await)
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Mongoose 7+ needs only the URI
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
connectDB();

// Optional: quick health check for DB state
app.get("/api/health", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  res.json({
    dbState: states[mongoose.connection.readyState],
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
