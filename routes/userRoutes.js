const expr = require('express');
const userController = require('../controllers/userController');

const userRoutes = expr.Router();

//userRoutes.route('/:id')
  //.delete(userModel.destroyUser)
  //.get(userModel.findOneByUser)
  //.put(userModel.upSertUser);

userRoutes.route('/')
  .post(userController.createUser)
  //.get(userModel.findAll);

module.exports = userRoutes;
