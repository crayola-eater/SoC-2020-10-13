const { query } = require("../db/index");

const dateTextToDate = (someDateText) => {
  // Should parse a string of d/m/yyyy format
  // and return a date.
  if (!/\d{1,2}\/\d{1,2}\/\d{4}/.test(someDateText)) {
    throw new Error(`Invalid published date = ${someDateText}.`);
  }
  const [date, month, year] = someDateText.split("/");
  if (date < 0 || date > 31) {
    throw new Error(`Date out of bounds ${someDateText}`);
  } else if (month < 1 || month > 12) {
    throw new Error(`Month out of bounds ${someDateText}`);
  }
  return new Date(Date.UTC(+year, month - 1, +date));
};

// Small function to add one book to the books table.
const addOneBook = async ({ author_id, title, publishedDate }) => {
  const response = await query(
    `INSERT INTO books (author_id, title, publishedDate)
      VALUES ($1, $2, $3) RETURNING *;`,
    [author_id, title, dateTextToDate(publishedDate)]
  );
  return response.rows;
};

// Small function to add many books to the books table.
// The books are deliberately added serially.
// (Wait for each one to finish before proceeding with
// the next one.)
const addManyBooks = async (books) => {
  const responses = [];
  for (const book of books) {
    responses.push(await addOneBook(book));
  }
  return responses;
};

const getAllBooks = async () => {
  // Should return all books as an array.
  const response = await query("SELECT * FROM books;");
  console.log("model", response.rows[0]);
  return response.rows;
};

const getBooksByTitle = async (partialTitle) => {
  if (!partialTitle) {
    throw new Error(`Invalid partial title = ${partialTitle}`);
  }
  const response = await query(
    "SELECT * FROM books WHERE title ~~* ('%' || $1 || '%');",
    [partialTitle]
  );
  return response.rows;
};

const getBooksByAuthor = async (partialAuthor) => {
  if (!partialAuthor) {
    throw new Error(`Invalid partial author = ${partialTitle}`);
  }
  const response = await query(
    `SELECT * FROM books
      INNER JOIN authors
        ON books.author_id = authors.id
      WHERE authors.first_name ~~* ('%' || $1 || '%')
        OR authors.last_name ~~* ('%' || $1 || '%');`,
    [partialAuthor]
  );
  return response.rows;
};

const getBookById = async (bookId) => {
  if ("number" !== typeof bookId) {
    throw new Error(`Invalid bookId = ${bookId}`);
  }
  const response = await query("SELECT * FROM books WHERE id = $1;", [bookId]);
  return response.rows;
};

const createBook = async (bookToCreate) => {
  if (!bookToCreate) {
    throw new Error(`Invalid book = ${bookToCreate}`);
  }
  return await addOneBook(bookToCreate);
};

const updateBookById = async (bookId, newBook) => {
  if ("number" !== typeof bookId) {
    throw new Error(`Invalid bookId = ${bookId}`);
  } else if (!newBook) {
    throw new Error(`Invalid book = ${JSON.stringify(newBook)}`);
  }
  const { author_id, title, publishedDate } = newBook;
  const response = await query(
    `UPDATE books SET (author_id, title, publishedDate) = ($1, $2, $3)
      WHERE id = $4 RETURNING *;`,
    [author_id, title, dateTextToDate(publishedDate), bookId]
  );
  return response.rows;
};

const deleteBookById = async (bookId) => {
  if ("number" !== typeof bookId) {
    throw new Error(`Invalid bookId = ${bookId}`);
  }
  const response = await query("DELETE FROM books WHERE id = $1 RETURNING *;", [
    bookId,
  ]);
  console.log(response.rows);
  return response.rows;
};

module.exports = {
  addOneBook,
  addManyBooks,
  getAllBooks,
  getBooksByTitle,
  getBooksByAuthor,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
