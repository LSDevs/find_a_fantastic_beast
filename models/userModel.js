const pgp = require('pg-promise')();
const dbConfig = require('../db/config');

const db = pgp(dbConfig);

module.exports = {
  findAll() {
    return db.many(`
      SELECT *
        FROM users
      ORDER BY id
    `);
  },
  findOneByUser(username) {
    return db.one(`
      SELECT *
        FROM users
      WHERE email = $1
    `, username);

  },
  findOneById(id) {
    return db.one(`
      SELECT *
        FROM users
      WHERE id = $1
    `, id);
  },
  upSertUser(user) {
    return db.one(`
      INSERT INTO users
        (name, email, password)
      VALUES
        ($/name/, $/email/, $/password/)

      RETURNING *
    `, user);
  },
  destroyUser(id) {
    return db.none(`
      DELETE
        FROM users
      WHERE id = $1
    `, id);
  },
};
