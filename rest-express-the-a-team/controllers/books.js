// | Method | Path             | Additional Info | Result                                         | Response                                  |
// | ------ | ---------------- | --------------- | ---------------------------------------------- | ----------------------------------------- |

const books = require("../models/books");

// | GET    | /books           |                 | all books                                      | { success: Boolean, payload: Book Array } |
module.exports.getAllBooks = async (req, res) => {
  res.json({
    success: true,
    payload: await books.getAllBooks(),
  });
};

// | GET    | /books           | ?search=potter  | all books with “potter” in the title           | { success: Boolean, payload: Book Array } |
module.exports.getBooksByTitle = async (req, res, next) => {
  if (!req.query.search) {
    return next();
  }
  res.json({
    success: true,
    payload: await books.getBooksByTitle(req.query.search),
  });
};

// | GET    | /books           | ?author=austen  | all books who have “austen” in the author name | { success: Boolean, payload: Book Array } |
module.exports.getBooksByAuthor = async (req, res, next) => {
  if (!req.query.author) {
    return next();
  }
  res.json({
    success: true,
    payload: await books.getBooksByAuthor(req.query.author),
  });
};

// | GET    | /books/<book_id> |                 | books with a particular id if it exists        | { success: Boolean, payload: Book }       |
module.exports.getBookById = async (req, res, next) => {
  if (!req.params.id) {
    return next();
  }

  res.json({
    success: true,
    payload: await books.getBookById(+req.params.id),
  });
};

// | POST   | /books           | { body }        | create a new book                              | { success: Boolean, payload: Book }       |
module.exports.createBook = async (req, res, next) => {
  if (!req.body) {
    return next();
  }
  res.json({
    success: true,
    payload: await books.createBook(req.body),
  });
};

// | PUT    | /books/<book_id> | { body }        | updated book                                   | { success: Boolean, payload: Book }       |
module.exports.updateBookById = async (req, res, next) => {
  if (!req.params.id || !req.body) {
    return next();
  }
  res.json({
    success: true,
    payload: await books.updateBookById(+req.params.id, req.body),
  });
};

// | DELETE | /books/<book_id> |                 | book deleted                                   | { success: Boolean, payload: Book }       |
module.exports.deleteBookById = async (req, res, next) => {
  if (!req.params.id) {
    return next();
  }
  res.json({
    success: true,
    payload: await books.deleteBookById(+req.params.id),
  });
};
// Bonus:

// | Method | Path             | Additional Info | Result       |
// | ------ | ---------------- | --------------- | ------------ |
// | PATCH  | /books/<book_id> | { body }        | updated book |
