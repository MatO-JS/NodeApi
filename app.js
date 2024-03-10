import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";

//using middleware for sending json data from postman

app.use(express.json());

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
  //gets all the users in th db
  const users = await User.find({});
  // To access the params from the url
  console.log(req.query);
  const keyword = req.query.keyword;
  console.log(keyword);
  res.json({
    success: true,
    users,
  });
});
app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  //NOTE - status 201 means 'created'.It is good practice to send the status code according to requesst type.We can also send cookie in the repsonse

  res.status(201).cookie("tempi", "lol cookie value").json({
    success: true,
    message: "Registered Succesfully",
  });
});

// Listening to the server on port 4000

app.listen(4000, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
