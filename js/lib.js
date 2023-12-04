/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Number(a) + Number(b)
}
function subtraction(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input');
  }
  return Number(a) - Number(b);
}
/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input');
  }
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input');
  }
  return Number(a) * Number(b);
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  if (isNaN(value) || isNaN(percent)) {
    throw new Error('Invalid input');
  }
  return (Number(value) * Number(percent)) / 100;
}
/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  if (isNaN(number)) {
    throw new Error('Invalid input');
  }
  return Math.trunc(Number(number));
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }
  return numbers.filter(num => num % 2 === 0);
}

/**
 * This function get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid input');
  }
  if (numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  var maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid input');
  }
  if (numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  var minNumber = numbers[0];
  var maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return { min: minNumber, max: maxNumber };
}
/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid input');
  }
  if (numbers.length === 0) {
    return NaN;
  }
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  if (typeof str !== 'string') {
    throw new Error('Invalid input');
  }
  return str.match(/[aeiou]/gi) || [];
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(strArr) {
  if (!Array.isArray(strArr)) {
    throw new Error('Invalid input');
  }
  return strArr.join('');
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */

function splitString(str, divider) {
  if (typeof str !== 'string' || typeof divider !== 'string') {
    throw new Error('Invalid input');
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
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    throw new Error('Invalid input');
  }
  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  if (typeof char !== 'string' || char.length !== 1) {
    throw new Error('Input must be a single character');
  }
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
