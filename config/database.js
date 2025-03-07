const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`\n MongoDB connected!`);
    } catch (error) {
      console.log("MongoDB Connection error", error);
      process.exit(1); // Exit process on failure
    }
}

module.exports = connectDB()