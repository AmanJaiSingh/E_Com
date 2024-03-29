const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER --create User
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const saveduser = await newUser.save();
    res.status(201).json(saveduser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
//https://localhost:5000/api/auth/login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json("No user found");

    const hash = cryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

    const Opassword = hash.toString(cryptoJS.enc.Utf8);

    Opassword !== req.body.password && res.status(401).json("Wrong password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
