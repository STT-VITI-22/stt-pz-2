/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    throw new Error("Given numbers must be valid")
  }

  return a - b
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    throw new Error("Given numbers must be valid")
  }

  if (b === 0) {
    throw new Error("It's impossible to divide by zero")
  }

  return a / b
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    throw new Error("Given numbers must be valid")
  }

  return a * b
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  if (isNaN(Number(value)) || isNaN(Number(percent))) {
    throw new Error("Given numbers must be valid")
  }

  if (percent === 0) {
    throw new Error("Given percent can not be zero")
  }

  return Math.round(percent / value * 100)
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  if (isNaN(Number(number))) {
    throw new Error("Given number must be valid")
  }

  return Number.parseInt(number)
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (!numbers.every(num => typeof num === 'number' && Number.isFinite(num))) {
    throw new Error("All elements in the array must be numbers");
  }

  return numbers.filter(num => num % 2 === 0);
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (!numbers.every(num => typeof num === 'number' && Number.isFinite(num))) {
    throw new Error("All elements in the array must be numbers");
  }

  return Math.max(...numbers);
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (!numbers.every(num => typeof num === 'number' && Number.isFinite(num))) {
    throw new Error("All elements in the array must be numbers");
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {min, max}
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  if (!numbers.every(num => typeof num === 'number' && Number.isFinite(num))) {
    throw new Error("All elements in the array must be numbers");
  }

  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  return Number.isInteger(mean) ? mean : parseFloat(mean.toFixed(10));
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str.match(/[aeiou]/gi) || [];
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function concatString(str) {
  if (!Array.isArray(str)) {
    throw new Error("Input must be an array");
  }

  if (!str.every(item => typeof item === "string")) {
    throw new Error("All elements in the array must be strings");
  }

  return str.join("");
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */

function splitString(str, divider) {
  if (typeof str !== "string" || typeof divider !== "string") {
    throw new Error("The inputs must be string");
  }

  return str.split(divider);
}

/**
 * This function return true if string contains substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  if (typeof str !== "string" || typeof subStr !== "string") {
    throw new Error("The inputs must be string");
  }

  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  if (typeof char !== "string" || char.length !== 1) {
    throw new TypeError("Input must be a single character string");
  }

  return char === char.toLowerCase() && char !== char.toUpperCase();
}

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
  concatString,
  splitString,
  hasSubString,
  isLowerCase
}
