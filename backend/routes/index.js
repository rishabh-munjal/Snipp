var express = require("express");
var router = express.Router();
var userModel = require("../models/userModel");
var bcrypt = require("bcryptjs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/signUp", async (req, res) => {
  let { username, name, email, password } = req.body;
  let emailcon = await userModel.findOne({ email: email });

  if (emailcon) {
    res.json({
      sucess: false,
      message: "Email already exists",
    });
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        let user = userModel.create({
          username: username,
          name: name,
          email: email,
          password: hash,
        });

        res.json({
          sucess: true,
          message: "User created",
        });
      });
    });
  }
});

router.post("/login ", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email: email });
  if(user){
    bcrypt.compare(password, user.password, function (err, res) {
      // result == true
      if (res) {
        res.json({
          sucess: true,
          message: "Login success",
        });
      } else {
        res.json({
          sucess: false,
          message: "Login failed",
        });
      }
    });

  }else{
    res.json({sucess:false,message:"User not found"})
  }
});

module.exports = router;
