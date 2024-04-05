import express from "express";

import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

dotenv.config;

export const app = express();

config({ path: "./data/config.env" });
//using middleware for sending json data from postman
app.use(express.json());
app.use("/api/v1/users", userRouter);

// Configuring the .env file
dotenv.config();
const PORT = process.env.PORT;

// Dynamic Rouctin.Write the code below and go to postman give the url localhost:4000/userid and in the body tab add an id in json form {"id":"paste any id from the db entry"}.Now press send.We get the corresponding user in the response seciton of postman .(ie in the Body) tab of the response section.We can also send id in query params.enter id in keytab in params and the in value tab add value of id id from db.This gets send through the url.

// app.get("/userid/:id", async (req, res) => {
//   // const { id } = req.body;
//   //REVIEW - In the case of sending id through qurey u  can use as shown below.Go to postman and remove everything from the body and add id as key value pair in params.
//   const { id } = req.params;
//   const user = await User.findById(id);
//   // Another way is make the id dynamic using params.app.get("userid",..etc) . changes to app.get("/userid/:id").The meaning of this is that whatever comes after userid in the url of postman gets saved in id of /userid/:id ,   so that we can access it dynamically.now in postman if we send any id in the url localhost:4000/userid/abcdefgh we get this in the console
//   console.log(req.params);
//   //now if we send in postman we get {} in console
//   res.json({
//     success: true,
//     //user,// this changes to
//     user,
//   });
// });

app.get("/", (req, res) => {
  res.send("NiceWorking");
});
