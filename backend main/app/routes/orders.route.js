const express = require('express');
const orders = require('../controllers/orders.controller');

const router = express.Router();

router.route('/').get(orders.findAll).post(orders.create).delete(orders.deleteAll);

router.route('/:id').get(orders.findOne).put(orders.update).delete(orders.delete);

// router.route('/drop/:name').post(orders.dropCollection)
module.exports = router;