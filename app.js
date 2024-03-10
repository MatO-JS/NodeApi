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
    "mongodb+srv://bmatomato:balumathew@cluster0.bkhkhc6.mongodb.net/backendApi?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((e) => console.log(e));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);
app.get("/", (req, res) => {
  res.send("Nice working");
});

// We are going to make an api to access all users in the url localhost:/users/all

app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users,
  });
});
app.post("/users/new", async (req, res) => {
  await User.create({
    name: "Arun",
    email: "Arun@gamil.com",
    password: "password",
  });
  res.json({
    success: true,
    message: "Registered Succesfully",
  });
});

// Listening to the server on port 4000

app.listen(4000, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
