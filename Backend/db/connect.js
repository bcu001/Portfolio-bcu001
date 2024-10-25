import mongoose from "mongoose";

const pass = "qXYg6veEG7JujRcX";
const dbName = "bcuAPI";
const url = `mongodb+srv://new-user-001:${pass}@bcuapi.99xbt.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=bcuAPI`;

const connectDB = () => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("MongoDB connection error: ", error);
    });
};

export default connectDB;
