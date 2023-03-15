const express = require('express');
const comments = require('../controllers/comments.controller');

const router = express.Router();

router.route('/').get(comments.findAll).post(comments.create).delete(comments.deleteAll);

router.route('/:id').get(comments.findOne).delete(comments.delete);




// router.route('/drop/:name').post(comments.dropCollection)
module.exports = router;