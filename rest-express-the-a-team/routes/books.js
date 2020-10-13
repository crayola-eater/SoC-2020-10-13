const express = require("express");
const booksController = require("../controllers/books");

const router = express.Router();

router.get("/", booksController.getBooksByTitle);
router.get("/", booksController.getBooksByAuthor);
router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.createBook);
router.put("/:id", booksController.updateBookById);
router.delete("/:id", booksController.deleteBookById);

// Bonus:

// | Method | Path             | Additional Info | Result       |
// | ------ | ---------------- | --------------- | ------------ |
// | PATCH  | /books/<book_id> | { body }        | updated book |
module.exports = router;
