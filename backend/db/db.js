const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB COnnected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    console.error("Full Error Details:", error);
  }
};

module.exports = { db };
