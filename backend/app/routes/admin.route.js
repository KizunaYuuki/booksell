const express = require("express");
const adminRouter = express.Router();

// Require controller modules.
const adminController = require("../controllers/admin.controller");

// Tạo tài khoản admin
adminRouter.route('/create')
    // .post(adminController.authMiddleware, adminController.createAccountAdmin);
    .post(adminController.createAccountAdmin);

// Tạo mã giảm giá
adminRouter.route('/discount')
    .post(adminController.authMiddleware, adminController.createDiscountCode);

// Xác thực đăng nhập
adminRouter.route('/auth/login')
    .post(adminController.loginAdmin);

// Đăng xuất
adminRouter.route('/auth/logout')
    .get(adminController.logoutAdmin);

// Quản lý người dùng
adminRouter.route('/manage/user')
    // .get(adminController.authMiddleware, adminController.findAllUser);
    .get(adminController.findAllUser);


adminRouter.route('/manage/user/:id')
    .put(adminController.authMiddleware, adminController.block_activateAccountUser);



module.exports = adminRouter;
