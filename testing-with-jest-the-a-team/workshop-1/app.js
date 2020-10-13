// Complete the following greetPerson funtction so that it passes the tests in app.test.js

function greetPerson(name) {
  return `Greetings, ${name}`;
}

/* The doubleAndAddOne function takes in a number as its only argument. It returns the result of doubling the number and adding one
to it. */

function doubleAndAddOne(number) {
  return number * 2 + 1;
}

/* The isLongArray function takes in an array as its only argument. It returns true if the array length is greater than 10, or false
if it is not. */

function isLongArray(array) {
  if (array.length > 10) {
    return true;
  }
  return false;
}

/* The addItemToArray function takes in an array and a item. It returns a new array which is a copy of the old array plus the new 
item. */

function addItemToArray(array, item) {
  return [...array, item];
}

/* The addKeyValuePairToObject function takes in an object, a key and a value. It returns a new object which is a copy of the old object 
plus the new key/value pair.  */

function addKeyValuePairToObject(object, key, value) {
  return { ...object, [key]: value };
}

/* The throwError function takes in a number and a message (string). If the number is even, it throws an error. */

function throwErrorIfEven(number) {
  if (number % 2 === 0) {
    throw new error(`Error, ${number} is even!`);
  }
  return false;
}

module.exports = {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
};
