const {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} = require("./app");

/* Task: Write a set of tests for each of the above functions. Use the Jest documentation to help you find the right expect statement
'matchers' for each function. The first set of tests are written for you - but you have to write the function!*/

// greetPerson tests:

test(`The greetPerson function returns the correct greeting string with Ben's name`, () => {
  const actual = greetPerson("Ben");
  const expected = "Greetings, Ben";

  expect(actual).toBe(expected);
});

test(`The greetPerson function returns the correct greeting string with Mell's name`, () => {
  const actual = greetPerson("Mell");
  const expected = "Greetings, Mell";

  expect(actual).toBe(expected);
});

test(`The greetPerson function returns the correct greeting string with Liz's name`, () => {
  const actual = greetPerson("Liz");
  const expected = "Greetings, Liz";

  expect(actual).toBe(expected);
});

// The doubleAndAddOne function takes in a number as its only argument. It returns the result of doubling the number and adding one
// to it. */

test(`doubleAndAddOne function returns the correct number for 10`, () => {
  const actual = doubleAndAddOne(10);
  const expected = 21;

  expect(actual).toBe(expected);
});

test(`doubleAndAddOne function returns the correct number for 0`, () => {
  const actual = doubleAndAddOne(0);
  const expected = 1;

  expect(actual).toBe(expected);
});

test(`doubleAndAddOne function returns the correct number for -7`, () => {
  const actual = doubleAndAddOne(-7);
  const expected = -13;

  expect(actual).toBe(expected);
});

/* The isLongArray function takes in an array as its only argument. It returns true if the array length is greater than 10, or false
if it is not. */

test(`isLongArray function returns the correct boolean for an array of length 11`, () => {
  const actual = isLongArray(new Array(11));
  const expected = true;

  expect(actual).toBe(expected);
});

test(`isLongArray function returns the correct boolean for an array of length 3`, () => {
  const actual = isLongArray(new Array(3));
  const expected = false;

  expect(actual).toBe(expected);
});

test(`isLongArray function returns the correct boolean for an array of length 0`, () => {
  const actual = isLongArray([]);
  const expected = false;

  expect(actual).toBe(expected);
});

/* The addItemToArray function takes in an array and a item. It returns a new array which is a copy of the old array plus the new 
item. */

// function addItemToArray(array, item) {
//   return [...array, item];
// }

test(`addItemToArray function returns the correct new array and the new item `, () => {
  const actual = addItemToArray([0, 1], 2);
  const expected = [0, 1, 2];

  expect(actual).toEqual(expected);
});

test(`addItemToArray function returns the correct new array and the new item `, () => {
  const actual = addItemToArray([0, 1], 2);
  const expected = [0, 1, 3];

  expect(actual).not.toEqual(expected);
});

test(`addItemToArray function returns the correct new array and the new item `, () => {
  const actual = addItemToArray([7, 4], 9);
  const expected = [7, 4, 9, 13];

  expect(actual).not.toEqual(expected);
});

test(`addItemToArray function returns the correct new array and the new item `, () => {
  const actual = addItemToArray([-2, "a"], 7);
  const expected = [-2, "a", 7];

  expect(actual).toEqual(expected);
});

test(`addItemToArray function returns the correct new array and the new item `, () => {
  const actual = addItemToArray(["t", "a", "op", "po"], "ac");
  const expected = ["t", "a", "op", "po", "ac"];

  expect(actual).toEqual(expected);
});

/* The addKeyValuePairToObject function takes in an object, a key and a value. It returns a new object which is a copy of the old object 
plus the new key/value pair.  */

// function addKeyValuePairToObject(object, key, value) {
//   return { ...object, [key]: value };
// }
test(`addKeyValuePairToObject function returns the new object and the new key/value pair `, () => {
  const actual = addKeyValuePairToObject({ a: 1 }, "b", 2);
  const expected = { a: 1, b: 2 };

  expect(actual).toEqual(expected);
});

test(`addKeyValuePairToObject function returns the new object and the new key/value pair `, () => {
  const actual = addKeyValuePairToObject({ y: 89 }, "hello", 300);
  const expected = { y: 89, hello: 300 };

  expect(actual).toEqual(expected);
});

test(`addKeyValuePairToObject function returns the new object and the new key/value pair `, () => {
  const actual = addKeyValuePairToObject({ a: 1, z: 5, r: true }, "f", 4);
  const expected = { a: 1, z: 5, r: true, f: 4 };

  expect(actual).toEqual(expected);
});

test(`addKeyValuePairToObject function returns the new object and the new key/value pair `, () => {
  const actual = addKeyValuePairToObject({ a: "*", gr: 3 }, "f", false);
  const expected = { a: "*", gr: 3, f: false };

  expect(actual).toEqual(expected);
});

test(`addKeyValuePairToObject function returns the new object and the new key/value pair `, () => {
  const s = Symbol("a");
  const actual = addKeyValuePairToObject({ a: s }, "f", 4);
  const expected = { a: s, f: 4 };

  expect(actual).toEqual(expected);
});

/* The throwError function takes in a number and a message (string). If the number is even, it throws an error. */

// function throwErrorIfEven(number) {
//   if (number % 2 === 0) {
//     throw new error(`Error, ${number} is even!`);
//   }
//   return false;
// }

// //test('throws on octopus', () => {
//   expect(() => {
//     drinkFlavor('octopus');
//   }).toThrow();
// });

test(`throwError function throws error if number is even `, () => {
  expect(() => {
    throwErrorIfEven(4);
  }).toThrow();
});

test(`throwError function return false if number is odd `, () => {
  expect(throwErrorIfEven(7)).toBe(false);
});

test(`throwError function throws error if number is even `, () => {
  expect(() => {
    throwErrorIfEven(-16);
  }).toThrow();
});
