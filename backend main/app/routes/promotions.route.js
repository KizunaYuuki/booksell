const express = require('express');
const promotions = require('../controllers/promotions.controller');

const router = express.Router();

router.route('/').get(promotions.findAll).post(promotions.create).delete(promotions.deleteAll);

router.route('/:id').get(promotions.findOne).put(promotions.update).delete(promotions.delete);

// router.route('/drop/:name').post(promotions.dropCollection)
module.exports = router;