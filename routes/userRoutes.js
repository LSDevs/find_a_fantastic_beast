const expr = require('express');
const userController = require('../controllers/userController');

const userRoutes = expr.Router();

userRoutes.route('/:id')
  .delete(userController.deleteUser)
  .get(userController.showSingleUser)
  .put(userController.alterUser);

userRoutes.route('/')
  .post(userController.createUser)

module.exports = userRoutes;
