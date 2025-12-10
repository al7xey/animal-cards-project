const express = require('express');
const router = express.Router();
const controller = require('../controllers/animals.controller');

// GET /api/animals (все или фильтр)
router.get('/', controller.getAllAnimals);

// GET /api/animals/:id (конкретное животное)
router.get('/:id', controller.getAnimalById);

// POST /api/animals (создание)
router.post('/', controller.createAnimal);

module.exports = router;
