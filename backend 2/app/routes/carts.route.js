const express = require('express');
const carts = require('../controllers/carts.controller')

const router = express.Router();

router.route('/').get(carts.findAll).post(carts.create).delete(carts.deleteAll);

router.route('/:id').get(carts.findOne).put(carts.update).delete(carts.delete);

router.route('/bookList/:id').delete(carts.removeCarts).post(carts.pushCarts)

// router.route('/drop/:name').post(carts.dropCollection)
module.exports = router;