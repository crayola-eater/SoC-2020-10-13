const express = require("express");
const router = express.Router();

const authorsController = require("../controllers/authors");

router.get("/", authorsController.getAuthorsByName);
router.get("/:id", authorsController.getAuthorById);
router.get("/", authorsController.getAllAuthors);
router.post("/", authorsController.createAuthor);
router.post("/:id", authorsController.updateAuthorById);
router.delete("/:id", authorsController.deleteAuthorById);

// | Method | Path                 | Additional Info | Result         |
// | ------ | -------------------- | --------------- | -------------- |
// | PATCH  | /authors/<author_id> | { body }        | updated author |

module.exports = router;
