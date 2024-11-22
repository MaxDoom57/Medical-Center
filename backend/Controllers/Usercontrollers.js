const User = require("../Models/Usermodels");

//Display part--------------------------------------
const getAllusers = async (req, res, next) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  //If not find users in DB
  if (!users) {
    return res.status(404).json({ message: "User not found" });
  }

  //If have users,display them
  return res.status(200).json({ users });
};

//Data insert part-------------------------------------------
const addUsers = async (req, res, next) => {
  const { name, email, age, address } = req.body;

  let users;

  try {
    users = new User({ name, email, age, address });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  //if unable to add user
  if (!users) {
    return res.status(404).json({ message: "Unable to add user" });
  }
  return res.status(200).json({ users });
};

//Get by ID----------------------------------------------------
const getById = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }

  //if not available user
  if (!user) {
    return res.status(404).json({ message: "Not available user" });
  }
  return res.status(200).json({ user });
};

//Update user details------------------------------------
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, age, address } = req.body;

  let users;

  try {
    users = await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
      age: age,
      address: address,
    });
    users = await users.save();
  } catch (err) {
    console.log(err);
  }

  //if can't update user
  if (!users) {
    return res.status(404).json({ message: "Can't update user" });
  }
  return res.status(200).json({ users });
};

//Delete user-----------------------------------------
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try {
    user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  //if can't dalete user
  if (!user) {
    return res.status(404).json({ message: "Can't Delete user" });
  }
  return res.status(200).json({ user });
};

exports.getAllusers = getAllusers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
