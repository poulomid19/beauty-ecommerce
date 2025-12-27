const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
const PORT = process.env.PORT || PORT

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 App listening at http://localhost:${PORT}`);
  });
});