import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Form from "./model/Form.js";

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "https://portfolio-bcu001.vercel.app/",
      `http://localhost:${port}/`,
      "http://localhost:5173/",
      "https://portfolio-bcu001-jaoa.vercel.app/",
    ],
  })
);

mongoose.connect("mongodb://localhost:27017/PortfolioData");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend" });
});

app.post("/", async (req, res) => {
  const { name, email, comment } = req.body;
  const now = new Date();
  const date = now.toString();

  const newFormEntry = new Form({
    name,
    email,
    comment,
    date,
  });

  console.log(req.body);

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
