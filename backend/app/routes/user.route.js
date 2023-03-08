const express = require("express");
const userRouter = express.Router();

//Require controller modules.
const userController = require("../controllers/user.controller");

// Đăng ký tài khoản người dùng
userRouter.route('/register')
    .post(userController.registerUser);

module.exports = userRouter;

