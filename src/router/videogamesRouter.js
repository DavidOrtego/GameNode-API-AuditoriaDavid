// Este archivo contiene la lista de todas las operaciones definidas en el /controller/videogamesController.js

const express = require('express');
const router = express.Router();

const { getAllVideogames, getVideogameById, postVideogame } = require('../controller/videogamesController');
const { validateVideogameId, validateAddVideogame } = require('../validators/videogames');

// RUTAS
router.get('/', getAllVideogames);
router.get('/:id',validateVideogameId, getVideogameById );
router.post('/', validateAddVideogame, postVideogame);

module.exports = router;