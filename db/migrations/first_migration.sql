\c animals_db_dev;

DROP TABLE IF EXISTS animals;

CREATE TABLE IF NOT EXISTS animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    species VARCHAR(255),
    age VARCHAR(255),
    breed_origin TEXT,
    personality TEXT,
    abilities TEXT,
    favorite_foods VARCHAR(255),
    gender VARCHAR(255),
    borough VARCHAR(255),
    image_link TEXT,
    is_adopted BOOLEAN
);

CREATE INDEX ON animals (borough);

