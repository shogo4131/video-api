import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 3500;
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.DB || "")
    .then(() => console.info("Connected to DB"))
    .catch((err) => {
      if (err instanceof Error) console.error(err);
    });
};

app.listen(PORT, () => {
  connect();
  console.log("server");
});
