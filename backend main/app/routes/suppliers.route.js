const express = require('express');
const suppliers = require('../controllers/suppliers.controller')

const router = express.Router();

router.route('/').get(suppliers.findAll).post(suppliers.create).delete(suppliers.deleteAll);

router.route('/:id').get(suppliers.findOne).put(suppliers.update).delete(suppliers.delete);

// router.route('/drop/:name').post(suppliers.dropCollection)
module.exports = router;