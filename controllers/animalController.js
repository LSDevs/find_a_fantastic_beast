const animalModel = require('../models/animalModel');

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
  createAnimal(req, res) {
    animalModel.create({
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
      is_adopted: false,
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
  updateAnimal(req, res) {
    console.log(req.body);
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
      id: req.params.id
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
  deleteAnimal(req, res) {
    animalModel.destroy(req.params.id)
    .then(() => res.json({message: 'Successful!'}))
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400',
        err
      });
    });
  },
  //showAnimalByUser(req, res) {
   // animalModel.findByUser(req.params.uid)
  //},
};
