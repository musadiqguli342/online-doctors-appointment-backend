const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Check if Mongo URI exists
    if (!process.env.MONGO_URL) {
      console.error("MONGO_URL not found in environment variables");
      process.exit(1); // exit process because DB is required
    }

    // Connect to MongoDB with options
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");

    // Optional: listen for connection errors after initial connection
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1); // exit process if connection fails
  }
};

module.exports = connectDB;