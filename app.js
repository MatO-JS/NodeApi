import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";

// Configuring the .env file

dotenv.config();
const PORT = process.env.PORT;

// connecting to mongodb atlas

mongoose
  .connect(
    "mongodb+srv://bmatomato:balumathew@cluster0.bkhkhc6.mongodb.net/bmdatabase?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("Nice working");
});

// We are going to make an api to access all users in the url localhost:/users/all

app.get("/users/all", (req, res) => {
  res.json({
    success: true,
    users: [],
  });
});

// Listening to the server on port 4000

app.listen(4000, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
