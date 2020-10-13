// The function will have the following criteria:

// - It will take in 'meal' as its only argument. The meal is an array of strings. Each string represents an ingredient that was used to
// make the meal.
// - If one of the ingredients in the array is 'salt', the function should return true, otherwise it should return false.

// Task 1: Write the jest tests for a function which adheres to the above criteria.

// function only takes 1 argument (meal)
// meal = array of strings
// each string is the ingredient
// if one string === salt, return true
// else false

function doesMealContainSalt(meal) {
  // findIndex returns -1 if callback was not true for any ingredient
  return (
    meal.findIndex((ingredient) => ingredient.toLowerCase() === "salt") !== -1
  );
}

module.exports = doesMealContainSalt;
