import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
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
};

export const register = async (req, res) => {
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
};

export const specialFunc = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};

export const getUserDetails = async (req, res) => {
  // const { id } = req.body;
  //REVIEW - In the case of sending id through qurey u  can use as shown below.Go to postman and remove everything from the body and add id as key value pair in params.
  const { id } = req.params;
  const user = await User.findById(id);
  // Another way is make the id dynamic using params.Here app.get("userid",..etc) . changes to app.get("/userid/:id").The meaning of this is that whatever comes after userid in the url of postman gets saved in id of /userid/:id ,   so that we can access it dynamically.now in postman if we send any id in the url localhost:4000/userid/abcdefgh we get this in the console
  console.log(req.params);
  //now if we send in postman we get {} in console
  res.json({
    success: true,
    //user,// this changes to
    user,
  });
};
export const updateUser = async (req, res) => {
  // const { id } = req.body;
  //REVIEW - In the case of sending id through qurey u  can use as shown below.Go to postman and remove everything from the body and add id as key value pair in params.
  const { id } = req.params;
  const user = await User.findById(id);
  // Another way is make the id dynamic using params.Here app.get("userid",..etc) . changes to app.get("/userid/:id").The meaning of this is that whatever comes after userid in the url of postman gets saved in id of /userid/:id ,   so that we can access it dynamically.now in postman if we send any id in the url localhost:4000/userid/abcdefgh we get this in the console
  console.log(req.params);
  //now if we send in postman we get {} in console
  res.json({
    success: true,
    //user,// this changes to
    message: "Updated",
  });
};
export const deleteUser = async (req, res) => {
  // const { id } = req.body;
  //REVIEW - In the case of sending id through qurey u  can use as shown below.Go to postman and remove everything from the body and add id as key value pair in params.
  const { id } = req.params;
  const user = await User.findById(id);

  await user.deleteOne();
  console.log(req.params);
  //now if we send in postman we get {} in console
  res.json({
    success: true,
    //user,// this changes to
    message: "Deleted",
  });
};
