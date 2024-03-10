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

//!SECTION Dynamic Rouctin.Write the code below and go to postman give the url localhost:4000/userid and in the body tab add an id in json form {"id":"paste any id from the db entry"}.Now press send.We get the corresponding user in the response seciton of postman .(ie in the Body) tab of the response section.We can also send id in query params.enter id in keytab in params and the in value tab add value of id id from db.This gets send through the url.

app.get("/userid/:id", async (req, res) => {
  // const { id } = req.body;
  //REVIEW - In the case of sending id through qurey u  can use as shown below.Go to postman and remove everything from the body and add id as key value pair in params.
  const { id } = req.params;
  const user = await User.findById(id);
  // Another way is make the id dynamic using params.app.get("userid",..etc) . changes to app.get("/userid/:id").The meaning of this is that whatever comes after userid in the url of postman gets saved in id of /userid/:id ,   so that we can access it dynamically.now in postman if we send any id in the url localhost:4000/userid/abcdefgh we get this in the console
  console.log(req.params);
  //now if we send in postman we get {} in console
  res.json({
    success: true,
    //user,// this changes to
    user,
  });
});

// Listening to the server on port 4000

app.listen(4000, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
