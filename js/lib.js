/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  return Number(a) - Number(b);
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  if(Number(a) === 0 || Number(b) === 0) {
    return 0;
  } else {
    return Number(a) / Number(b);
  }
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  if(Number(a) === 0 || Number(b) === 0) {
    return 0;
  } else {
    return Number(a) * Number(b);
  }
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return Math.round(Number(percent) / 100) * Number(value);
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  return Math.trunc(Number(number));
}

/**
 * This function receives an array of natural numbers and returns an array of even numbers
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

/**
 * This function gets the maximum number from an array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  return Math.max(...numbers);
}

/**
 * This function returns an object with the minimum and maximum numbers from an array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

/**
 * This function calculates the arithmetic mean from an array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

/**
 * This function returns an array of vowels from a string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  return str.match(/[aeiou]/gi) || [];
}

/**
 * This function concatenates an array of strings into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(str) {
  return str.join('');
}

/**
 * This function splits a string according to the divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */
function splitString(str, divider) {
  console.log("asdasda");
  return str.split(divider);
}

/**
 * This function returns true if the string contains the substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  return str.includes(subStr);
}

/**
 * This function returns true if the character is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  return char === char.toLowerCase();
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
  cancatString,
  splitString,
  hasSubString,
  isLowerCase
}
