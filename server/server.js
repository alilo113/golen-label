const express = require("express");
const mongoose = require("mongoose");
const user = require("./modules/users"); // Assuming your user model is correctly exported from "./modules/users"
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/database")
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection error:", error));

app.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new user({ username, email, password }); // Simplified object creation

    await newUser.save();
    console.log(newUser);

    res.status(200).send({ message: "User registered successfully!!!" });
  } catch (error) {
    console.error("Sign-up error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/log-in", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await user.findOne({ email });

    if (userExist && await userExist.comparePassword(password)) {
      res.send({ username: userExist.username }); // Sending username if login is successful
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));