const { authors, books } = require("../../data");

const { addManyAuthors } = require("../../models/authors");
const { addManyBooks } = require("../../models/books");

const populateAuthorsTable = async () => await addManyAuthors(authors);
const populateBooksTable = async () => await addManyBooks(books);

// Small function to populate all tables.
const populateAllTables = async () => {
  await populateAuthorsTable();
  await populateBooksTable();
};

// Works like if __name__ == '__main__' in Python.
// Only runs code in IF block if we're running this file
// directly (instead of requiring/importing it).
if (require.main === module) {
  populateAllTables();
}

module.exports = { populateAllTables };
