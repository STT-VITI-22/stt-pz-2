/**
 * Converts value to a number. Throws if value is not a valid number
 * @param value {number|string}
 * @returns {number}
 */
function toNumber(value) {
  const number = typeof value === 'string' && value.trim() === '' ? NaN : Number(value);
  if (Number.isNaN(number)) {
    throw new TypeError('Invalid number');
  }
  return number;
}

/**
 * Throws if array is empty
 * @param numbers {number[]}
 */
function assertNotEmpty(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Array must not be empty');
  }
}

/**
 * This function must sum two numbers and return result of sum
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return toNumber(a) + toNumber(b);
}

/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  return toNumber(a) - toNumber(b);
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  const divisor = toNumber(b);
  if (divisor === 0) {
    throw new Error('Division by zero');
  }
  return toNumber(a) / divisor;
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  return toNumber(a) * toNumber(b);
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return (toNumber(value) * toNumber(percent)) / 100;
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  return Math.trunc(toNumber(number));
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  assertNotEmpty(numbers);
  return Math.max(...numbers);
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  assertNotEmpty(numbers);
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  assertNotEmpty(numbers);
  return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}

/**
 * This function return array of vowerls form string (latin and cyrillic)
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  return str.match(/[aeiouаеєиіїоуюяыэё]/gi) || [];
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(str) {
  return str.join('');
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */
function splitString(str, divider) {
  return str.split(divider);
}

/**
 * This function return true if string contains substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

module.exports = {
  sum,
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
}
