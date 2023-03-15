const express = require('express');
const addresses = require('../controllers/addresses.controller');

const router = express.Router();

router.route('/').get(addresses.findAll).post(addresses.create).delete(addresses.deleteAll);

router.route('/:id').get(addresses.findOne).put(addresses.update).delete(addresses.delete);

// router.route('/drop/:name').post(addresses.dropCollection)
module.exports = router;