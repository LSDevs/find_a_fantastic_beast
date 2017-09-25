// const options = {
//   query: (e) => {
//     console.log(e.query);
//   }
// };

// const pgp = require('pg-promise')(options);

// let db;

// if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
//   db = pgp({
//     database: process.env.DB_NAME || 'animals_db_dev',
//     port: process.env.DB_PORT || 5432,
//     host: process.env.DB_HOST || 'localhost',
//   });
// } else if (process.env.NODE_ENV === 'production') {
//   db = pgp(process.env.DATABASE_URL);
// }

module.exports = process.env.DATABASE_URL || {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'animals_db_dev',
};
