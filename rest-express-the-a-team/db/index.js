const { Pool } = require("pg");

const pool = new Pool({
  // Pool will grab credentials from environmental
  // variables automatically so not listed here.
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports.query = pool.query.bind(pool);
