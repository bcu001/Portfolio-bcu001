import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Form from "./model/Form.js";
import connectDB from "./db/connect.js";

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "https://portfolio-bcu001.vercel.app",
      "https://portfolio-bcu001-jaoa.vercel.app/",
      "http://localhost:9000",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors()); // Enable CORS for all preflight requests

await connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend" });
});

app.post("/", async (req, res) => {
  let rawData = "";
  req.on("data", (chuck) => {
    rawData += chuck;
  });
  req.on("end", () => {
    console.log("Raw Body Data", rawData);
  });

  console.log(req.body);

  //code
  const { name, email, comment } = req.body;
  const now = new Date();
  const date = now.toString();

  const newFormEntry = new Form({
    name,
    email,
    comment,
    date,
  });

  try {
    await newFormEntry.save();
    console.log("Form data saved to MongoDB");
    res.status(200).send("Form data saved successfully!");
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send("Failed to save form data");
  }
});

app.listen(port, () => {
  console.log(`Severing is running at http://localhost:${port}`);
});
