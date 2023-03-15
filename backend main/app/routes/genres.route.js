const express = require('express');
const genres = require('../controllers/genres.controller')

const router = express.Router();

router.route('/').get(genres.findAll).post(genres.create).delete(genres.deleteAll);

router.route('/:id').get(genres.findOne).put(genres.update).delete(genres.delete);

router.route('/subGenre/:id').delete(genres.removeGenres).post(genres.pushGenres)

// router.route('/drop/:name').post(genres.dropCollection)
module.exports = router;