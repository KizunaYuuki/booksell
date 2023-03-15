const express = require('express');
const users = require('../controllers/users.controller')

const router = express.Router();

// Tìm tất cả người, tạo người dùng, xoá all người dùng
router.route('/')
    .get(users.findAll)
    .post(users.create)
    .delete(users.deleteAll);

router.route('/Logout')
    .get(users.logout)

// Tìm người dùng theo id, cập nhật và xoá người dùng 
router.route('/:id')
    .get(users.findOne)
    .put(users.authenticationLogin, users.update)
    .delete(users.delete);

router.route('/Login')
    .post(users.checkLogin);



// router.route('/drop/:name').post(users.dropCollection)
module.exports = router;