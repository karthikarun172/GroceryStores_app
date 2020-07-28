const express = require("express");
const router = express.Router();
const { ValidateForm, RegisterForm } = require("../Models/RegisterModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");

router.get("/:_id", async (req, res) => {
  let register = await RegisterForm.findById(req.params._id).select(
    "-Password"
  );
  res.send(register);
});

router.get("/", async (req, res) => {
  let register = await RegisterForm.find().sort("Username").select("-Password");
  res.send(register);
});

router.post("/", async (req, res) => {
  const { error } = ValidateForm(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let register = await RegisterForm.findOne({ Phone: req.body.Phone });
  if (register) return res.status(422).send("already Registed");

  register = new RegisterForm(
    _.pick(req.body, ["Username", "Phone", "Password"])
  );

  const salt = await bcrypt.genSalt(10);
  register.Password = await bcrypt.hash(register.Password, salt);

  register = await register.save();
  const token = register.generateAuthToken();
  res.header("x-auth-token", token).send({ token });
});

router.put("/:_id", async (req, res) => {
  const { error } = ValidateForm(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let register = await RegisterForm.findByIdAndUpdate(
    req.params._id,
    _.pick(req.body, ["Username", "Phone", "Password"]),
    { new: true }
  );
  if (!register) return res.status(400).send("The Registered ID is Not Found");
  res.send(register);
});

module.exports = router;
