const { query } = require("../index");

// Small function drop books table
const dropBooksTable = async () => {
  const response = await query("DROP TABLE IF EXISTS books;");
  return response.rows;
};

// Small function to drop authors table
const dropAuthorsTable = async () => {
  const response = await query("DROP TABLE IF EXISTS authors;");
  return response.rows;
};

// Small function to drop all tables
const dropAllTables = async () => {
  await dropBooksTable();
  await dropAuthorsTable();
};

// Works like if __name__ == '__main__' in Python.
// Only runs code in IF block if we're running this file
// directly (instead of requiring/importing it).
if (require.main === module) {
  dropAllTables();
}

module.exports = { dropAllTables };
