// Now create a dedicated route for authors. The table below outlines the desired functionality.

const authors = require("../models/authors");

// | Method | Path                 | Additional Info | Result                                    | Response                                    |
// | ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |

// | GET    | /authors             |                 | all authors                               | { success: Boolean, payload: Author Array } |
module.exports.getAllAuthors = async (req, res) => {
  res.json({
    success: true,
    payload: await authors.getAllAuthors(),
  });
};

// | GET    | /authors             | ?search=austen  | all authors with “austen” in their name   | { success: Boolean, payload: Author Array } |
module.exports.getAuthorsByName = async (req, res, next) => {
  if (!req.query.search) {
    return next();
  }
  res.json({
    success: true,
    payload: await authors.getAuthorsByName(req.params.search),
  });
};

// | GET    | /authors/<author_id> |                 | authors with a particular id if it exists | { success: Boolean, payload: Author }       |
module.exports.getAuthorById = async (req, res, next) => {
  if (!req.params.id) {
    return next();
  }
  res.json({
    success: true,
    payload: await authors.getAuthorById(+req.params.id),
  });
};

// | POST   | /authors             | { body }        | create a new author                       | { success: Boolean, payload: Author }       |
module.exports.createAuthor = async (req, res, next) => {
  if (!req.params.id || !req.body) {
    return next();
  }
  res.json({
    success: true,
    payload: await authors.createAuthor(+req.params.id, req.body),
  });
};

// | PUT    | /authors/<author_id> | { body }        | updated author                            | { success: Boolean, payload: Author }       |
module.exports.updateAuthorById = async (req, res, next) => {
  if (!req.params.id || !req.body) {
    return next();
  }
  res.json({
    success: true,
    payload: await authors.updateAuthorById(+req.params.id, req.body),
  });
};

// | DELETE | /authors/<author_id> |                 | author deleted                            | { success: Boolean, payload: Author }       |
module.exports.deleteAuthorById = async (req, res, next) => {
  if (!req.params.id) {
    return next();
  }
  res.json({
    success: true,
    payload: await authors.deleteAuthorById(+req.params.id),
  });
};

// Bonus:

// | Method | Path                 | Additional Info | Result         |
// | ------ | -------------------- | --------------- | -------------- |
// | PATCH  | /authors/<author_id> | { body }        | updated author |
