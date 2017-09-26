const expr = require('express');
const animalController = require('../controllers/animalController');

const animalRoutes = expr.Router();

animalRoutes.route('/:borough/:id')
  .get(animalController.showById)
  .put(animalController.updateAnimal)
  .delete(animalController.deleteAnimal);

animalRoutes.route('/:borough')
  .get(animalController.showByBorough);

 animalRoutes.post('/', animalController.createAnimal);

module.exports = animalRoutes;
