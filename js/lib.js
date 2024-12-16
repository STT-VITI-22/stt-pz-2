/**
 * Subtracts two numbers and returns the result
 * @param {number|string} a 
 * @param {number|string} b 
 * @returns {number}
 */
const subtraction = (a, b) => Number(a) - Number(b);

/**
 * Divides two numbers and handles division by zero
 * @param {number|string} a 
 * @param {number|string} b 
 * @returns {number}
 */
const division = (a, b) => (Number(a) === 0 || Number(b) === 0) ? 0 : Number(a) / Number(b);

/**
 * Multiplies two numbers and handles multiplication by zero
 * @param {number|string} a 
 * @param {number|string} b 
 * @returns {number}
 */
const multiplication = (a, b) => (Number(a) === 0 || Number(b) === 0) ? 0 : Number(a) * Number(b);

/**
 * Calculates a percentage of a value
 * @param {number|string} value 
 * @param {number|string} percent 
 * @returns {number}
 */
const percentage = (value, percent) => (Number(percent) / 100) * Number(value);

/**
 * Returns the whole part of a number
 * @param {number|string} number 
 * @returns {number}
 */
const getWholeNumberPart = (number) => Math.trunc(Number(number));

/**
 * Filters even numbers from an array
 * @param {number[]} numbers 
 * @returns {number[]}
 */
const getEvenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0);

/**
 * Returns the maximum number in an array
 * @param {number[]} numbers 
 * @returns {number}
 */
const getMaxNumber = (numbers) => Math.max(...numbers);

/**
 * Returns an object with the minimum and maximum numbers in an array
 * @param {number[]} numbers 
 * @returns {{min: number, max: number}}
 */
const getMinAndMaxNumbers = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers)
});

/**
 * Calculates the arithmetic mean of an array
 * @param {number[]} numbers 
 * @returns {number}
 */
const arithmeticMeans = (numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length;

/**
 * Extracts vowels from a string
 * @param {string} str 
 * @returns {string[]}
 */
const getVowels = (str) => str.match(/[aeiou]/gi) || [];

/**
 * Concatenates an array of strings into one string
 * @param {string[]} str 
 * @returns {string}
 */
const cancatString = (str) => str.join('');

/**
 * Splits a string by a divider
 * @param {string} str 
 * @param {string} divider 
 * @returns {string[]}
 */
const splitString = (str, divider) => str.split(divider);

/**
 * Checks if a string contains a substring
 * @param {string} str 
 * @param {string} subStr 
 * @returns {boolean}
 */
const hasSubString = (str, subStr) => str.includes(subStr);

/**
 * Checks if a character is in lowercase
 * @param {string} char 
 * @returns {boolean}
 */
const isLowerCase = (char) => char === char.toLowerCase();

module.exports = {
  subtraction,
  division,
  multiplication,
  percentage,
  getWholeNumberPart,
  getEvenNumbers,
  getMaxNumber,
  getMinAndMaxNumbers,
  arithmeticMeans,
  getVowels,
  cancatString,
  splitString,
  hasSubString,
  isLowerCase
};
