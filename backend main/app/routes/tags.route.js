const express = require('express');
const tags = require('../controllers/tags.controller');

const router = express.Router();

router.route('/').get(tags.findAll).post(tags.create).delete(tags.deleteAll);

router.route('/:id').get(tags.findOne).delete(tags.delete);




// router.route('/drop/:name').post(tags.dropCollection)
module.exports = router;