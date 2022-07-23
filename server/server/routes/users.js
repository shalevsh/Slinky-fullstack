const express = require("express");
const bcrypt = require("bcrypt");
const usersManager = require("../services/usersManager");
const router = express.Router();
const session = require("express-session");

router.post("/register", async (req, res) => {
  const { userName, password, firstName, lastName, email, company, isAdmin } =
    req.body;
  const user = await usersManager.getUser(userName);
  if (user) {
    res.status(400).send("User already exists");
  } else {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const newUser = await usersManager.createUser(
          userName,
          hash,
          firstName,
          lastName,
          email,
          company,
          isAdmin
        );
        res.status(201).send(newUser);
      }
    });
  }
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName, password);
  const user = await usersManager.getUser(userName);
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result) {
        res.status(200).send(user);
      } else {
        res.status(401).send("Invalid password");
      }
    });
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = router;
