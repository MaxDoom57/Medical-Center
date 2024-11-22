//Insert express and router
const express = require("express");
const router = express.Router();

//Insert model
const User = require("../Models/Usermodels");

//Insert userController
const userController = require("../Controllers/Usercontrollers");

router.get("/", userController.getAllusers);
router.post("/", userController.addUsers);
router.get("/:id", userController.getById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
