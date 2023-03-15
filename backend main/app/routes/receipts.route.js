const express = require('express');
const receipts = require('../controllers/receipts.controller');

const router = express.Router();

router.route('/').get(receipts.findAll).post(receipts.create).delete(receipts.deleteAll);

router.route('/:id').get(receipts.findOne).put(receipts.update).delete(receipts.delete);

// router.route('/drop/:name').post(receipts.dropCollection)
module.exports = router;