const expr = require('express');
const animalController = require('../controllers/animalController');

const animalRoutes = expr.Router();

animalRoutes.route('/:id')
  .get(animalController.showById);
  .put(animalController.updateAnimal);
  .delete(animalController.deleteAnimal);

animalRoutes.route('/')
  .get(animalController.showByBorough);
  .post(animalController.createAnimal);

module.exports = animalRoutes;
