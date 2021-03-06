const userModel = require('../models/userModel');
const crypt = require('bcrypt');

module.exports = {

  showByBorough(req, res) {
    console.log(req.params);
    animalModel.findByBorough(req.params.borough)
      .then(animals => {
        res.json({
          message: 'ok',
          data: {animals},
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          message: '400',
          err
        });
      });
  },
  showById(req, res) {
    animalModel.findById(req.params.id)
      .then(animal => {
        res.json({
          message: 'ok',
          data: {animal}
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          message: '400',
          err
        });
      });
  },
  async createUser(req, res) {
    userModel.upSertUser({
      name: req.body.name,
      email: req.body.email,
      password: await crypt.hash(req.body.password, await crypt.genSalt()),
    })
    .then(user => {
      res.json({
        message: 'ok',
        data: {user}
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400',
        err
      });
    });
  },
  updateAnimal(req, res) {
    animalModel.update({
      name: req.body.name,
      species: req.body.species,
      age: req.body.age,
      breed_origin: req.body.breed_origin,
      personality: req.body.personality,
      abilities: req.body.abilities,
      favorite_foods: req.body.favorite_foods,
      gender: req.body.gender,
      borough: req.body.borough,
      image_link: req.body.image_link,
    })
    .then(animal => {
      res.json({
        message: 'ok',
        data: {animal}
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400',
        err
      });
    });
  },
  deleteUser(req, res) {
    userModel.destroyUser(req.params.email)
    .then(() => res.json({message: 'Successful!'}))
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400',
        err
      });
    });
  },
};
