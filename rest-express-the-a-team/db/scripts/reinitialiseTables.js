const { createAllTables } = require("./createTables");
const { dropAllTables } = require("./dropTables");
const { populateAllTables } = require("./populateTables");

const reinitialiseTables = async () => {
  await dropAllTables();
  await createAllTables();
  await populateAllTables();
};

// Works like if __name__ == '__main__' in Python.
// Only runs code in IF block if we're running this file
// directly (instead of requiring/importing it).
if (require.main === module) {
  reinitialiseTables();
}
