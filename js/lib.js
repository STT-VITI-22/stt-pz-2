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
  if (Number(b) === 0) {
    throw new Error("Division by zero is not allowed");
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
  return Number(a) * Number(b);
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return (Number(value) * Number(percent)) / 100;
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  return Math.floor(Number(number));
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  return Math.max(...numbers);
}

/**
 * This function return object with min and max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

/**
 * This function return array of vowels from string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  return str.match(/[aeiou]/gi) || [];
}

/**
 * This function get array of string and concat them into one string
 * @param strs {string[]}
 * @returns {string}
 */
function cancatString(strs) {
  return strs.join("");
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
  isLowerCase,
};