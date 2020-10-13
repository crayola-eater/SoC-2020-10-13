const { query } = require("../db/index");

// Small function to add one author to the authors table.
module.exports.addOneAuthor = async ({ first_name, last_name }) => {
  const response = await query(
    `INSERT INTO authors (first_name, last_name)
      VALUES ($1, $2) RETURNING *;`,
    [first_name, last_name]
  );
  return response.rows;
};

// Small function to add many authors to the table.
// The authors are deliberately added serially.
// (Wait for each one to finish before proceeding with
// the next one.)
module.exports.addManyAuthors = async (authors) => {
  const responses = [];
  for (const author of authors) {
    responses.push(await this.addOneAuthor(author));
  }
  return responses;
};

//Now create a dedicated route for authors. The table below outlines the desired functionality.

// | Method | Path                 | Additional Info | Result                                    | Response                                    |
// | ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |

// | GET    | /authors             |                 | all authors                               | { success: Boolean, payload: Author Array } |
module.exports.getAllAuthors = async () => {
  const response = await query("SELECT * FROM authors;");
  return response.rows;
};

// | GET    | /authors             | ?search=austen  | all authors with “austen” in their name   | { success: Boolean, payload: Author Array } |
module.exports.getAuthorsByName = async (partialName) => {
  if (!partialName) {
    throw new Error(`Invalid partial name ${partialName}`);
  }
  const response = await query(
    `SELECT * FROM authors
      WHERE first_name ~~* ('%' || $1 || '%')
        OR last_name ~~* ('%' || $1 || '%');`,
    [partialName]
  );
  return response.rows;
};

// | GET    | /authors/<author_id> |                 | authors with a particular id if it exists | { success: Boolean, payload: Author }       |
module.exports.getAuthorById = async (authorId) => {
  if ("number" !== typeof authorId) {
    throw new Error(`Invalid author id = ${authorId}`);
  }
  const response = await query("SELECT * FROM authors WHERE id = $1", [
    authorId,
  ]);
  return response.rows;
};

// | POST   | /authors             | { body }        | create a new author                       | { success: Boolean, payload: Author }       |
module.exports.createAuthor = async (author) => {
  if (!author) {
    throw new Error(`Invalid author = ${author}`);
  }
  const response = await this.addOneAuthor(author);
  return response;
};

// | PUT    | /authors/<author_id> | { body }        | updated author                            | { success: Boolean, payload: Author }       |
module.exports.updateAuthorById = async (authorId, newAuthor) => {
  if ("number" !== typeof authorId) {
    throw new Error(`Invalid author id = ${authorId}`);
  } else if (!newAuthor) {
    throw new Error(`Invalid new author = ${newAuthor}`);
  }
  const { first_name, last_name } = newAuthor;
  const response = await query(
    `UPDATE authors SET (first_name, last_name) = ($1, $2)
      WHERE id = $3 RETURNING *;`,
    [first_name, last_name, authorId]
  );
  return response.rows;
};

// | DELETE | /authors/<author_id> |                 | author deleted                            | { success: Boolean, payload: Author }       |
module.exports.deleteAuthorById = async (authorId) => {
  if ("number" !== typeof authorId) {
    throw new Error(`Invalid author id = ${authorId}`);
  }
  const response = await query(
    "DELETE FROM authors WHERE id = $1 RETURNING *;",
    [authorId]
  );
  return response.rows;
};

// Bonus:

// | Method | Path                 | Additional Info | Result         |
// | ------ | -------------------- | --------------- | -------------- |
// | PATCH  | /authors/<author_id> | { body }        | updated author |
