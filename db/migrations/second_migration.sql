\c animals_db_dev;


DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email TEXT,
    password TEXT
);

CREATE INDEX ON users (email);