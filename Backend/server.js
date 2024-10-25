import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Form from "./model/Form.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/PortfolioData");

app.get("/", (req, res) => {
  res.send(`Backend of my Portfolio of `);
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
  console.log(`Server running at http://localhost:${port}`);
});
