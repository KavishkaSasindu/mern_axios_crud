const express = require("express");
const UserController = require("../controller/UserContoller");

const router = express.Router();

router.post("/create", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/get/:id", UserController.getOneUser);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
