const { query } = require("../index");

// Small function to create authors table
const createAuthorsTable = async () => {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS authors (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL
    );`
  );
  return response.rows;
};

// Small function to create books table
const createBooksTable = async () => {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      author_id INTEGER REFERENCES authors (id) ON DELETE CASCADE,
      title VARCHAR(100) NOT NULL,
      publishedDate TIMESTAMP NOT NULL
    );`
  );
  return response.rows;
};

// Small function to create all tables
const createAllTables = async () => {
  await createAuthorsTable();
  await createBooksTable();
};

// Works like if __name__ == '__main__' in Python.
// Only runs code in IF block if we're running this file
// directly (instead of requiring/importing it).
if (require.main === module) {
  createAllTables();
}

module.exports = { createAllTables };
