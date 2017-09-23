/* This module is the interface for the database.
CRUD methods in SQL to talk with the db.
Each function return a promise */

// Require pg-promise and execute it like a function.
const pgp = require('pg-promise')();
const dbConfig = require('../db/config.js');

// execute pgp with the db config to establish a connection
const db = pgp(dbConfig);

// Export all the functions
module.exports = {
/* @func findAll - Search trough all the user and return a promise */

    findAll() {
        return db.many(`
        SELECT * 
        FROM users 
        ORDER BY id
        `);
    },

    findOne(username) {
        return db.one(`
        SELECT *
        FROM users 
        WHERE email = $1
        `, username);
    },
    
    /* @func findById
    Takes id as a parameter and search through the users, 
    returning a promise */

    findById(id) {
        return db.one(`
        SELECT *
        FROM users 
        WHERE email = $1
        `, id)
    },

    /* @func save to create a new user. 
    ----------> Do we need also vendor and vendor_id like in Jason's file? 
    We're not using Passport, though */
    save(user) {
        return db.one(`
        INSERT INTO users (name, email, password)
        VALUES
        ($/name/, $/email/, $/password/)
        ON CONFLICT (email) DO UPDATE 
        SET 
        name = $/name/,
        email = $/email/,
        password = $/password/,
        RETURNING *
        `, user);
    },

    /* @func destroy
        Remove user from id*/

    destroy(id) {
        return db.none(`
        DELETE
        FROM users
        WHERE id = $1
        `, id);
    },
};