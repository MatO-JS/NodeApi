import express from "express";
import mongoose from "mongoose";
const app = express();

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

// We are going tomake an api to access all users in the url localhost:/users/all

app.get("users/all", (req, res) => {
  res.json({
    success: true,
    users: [],
  });
});
app.listen(4000, () => console.log("SERVER IS RUNNING ON PORT 4000"));
