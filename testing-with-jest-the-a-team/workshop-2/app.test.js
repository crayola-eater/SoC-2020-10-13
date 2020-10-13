/* You are in charge of managing the food quality in a chain of restaurants. You have a reputation for selling healthy food. You have
discovered that salt causes high blood pressure, and you decide to remove salt from all of the food that your restaurants serve.
However, the chefs in each of the restaurant do not agree wth the decision, and have continued to add salt in their food.

You decide to write a function to test whether their dishes contain salt. However, before writing the functions, you want to 
be absolutely certain that they work as intended - you wouldn't want to accuse your chefs of using salt incorrectly! You therefore
decide to write the tests for the function first. 

The function will have the following criteria:

- It will take in 'meal' as its only argument. The meal is an array of strings. Each string represents an ingredient that was used to
make the meal. 
- If one of the ingredients in the array is 'salt', the function should return true, otherwise it should return false.

Task 1: Write the jest tests for a function which adheres to the above criteria.

Task 2: Write the function in app.js, export it, and see if your tests pass or fail!

*/

const doesMealContainSalt = require("./app");

test("doesMealContainSalt function returns true when salt in array", () => {
  const actual = doesMealContainSalt([
    "salt",
    "salt",
    "salt",
    "lettuce",
    "sugar",
  ]);
  const expected = true;
  expect(actual).toBe(expected);
});

test("doesMealContainSalt function returns true when salt in array", () => {
  const actual = doesMealContainSalt(["SALT", "lettuce", "tlas"]);
  expect(actual).toBe(true);
});

test("doesMealContainSalt function returns false when salt not in array", () => {
  const actual = doesMealContainSalt(["lettuce", "tlas"]);
  expect(actual).toBe(false);
});

test("doesMealContainSalt function returns false when salt not in array", () => {
  const actual = doesMealContainSalt([
    "1",
    "false",
    "5",
    "true",
    "2",
    "1",
    "9",
  ]);
  expect(actual).toBe(false);
});

test("doesMealContainSalt function returns false when salt not in array", () => {
  const actual = doesMealContainSalt(["sal*", "salt*", "sa lt", "a salt"]);
  expect(actual).toBe(false);
});
