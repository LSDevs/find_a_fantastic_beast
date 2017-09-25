const pgp = require('pg-promise')();
const dbConfig = require('../db/config');

const db = pgp(dbConfig);

const Animal = {};

Animal.findByBorough = (borough) => {
  console.log(borough)
    return db.many(
        `SELECT * FROM animals
          WHERE borough = $1
        `,
    [borough]
    );
};

Animal.findById = (id) => {
    return db.oneOrNone(
        `SELECT * from animals
        WHERE id = $1`,
        [id]
    );
;}

// animal is the correct parameter?
Animal.create = (animal) => {
    return db.one(
        `
        INSERT INTO animals (name,species,age,breed_origin,personality,abilities,favorite_foods,gender,borough,image_link,is_adopted)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
        RETURNING *`,
        [animal]
    )};


Animal.update = (animal)=> {
        return db.one(`
        UPDATE animals SET
        name = $1,
        species = $2,
        age = $3
        breed_origin = $4
        personality = $5
        abilities = $6
        favorite_foods = $7
        gender = $8
        borough = $9
        image_link = $10
        WHERE id = $11
        RETURNING *`,
        [animal.name, animal.species, animal.age, animal.breed_origin, animal.personality, animal.abilities, animal.favorite_food, animal.gender, animal.borough, animal.image_link, id]
    );
};

Animal.destroy = (id) => {
    return db.none(`
      DELETE FROM animals
      WHERE id = $1
    `, [id]);
  }

module.exports = Animal;
