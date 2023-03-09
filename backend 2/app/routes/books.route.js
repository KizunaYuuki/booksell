const express = require('express');
const books = require('../controllers/books.controller');

const router = express.Router();

router.route('/').get(books.findAll).post(books.create).delete(books.deleteAll);

router.route('/:id').get(books.findOne).put(books.update).delete(books.delete);




// router.route('/drop/:name').post(books.dropCollection)
module.exports = router;