/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a, b) {
  return Number(a) + Number(b)
}


/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  return Number(a) - Number(b)
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  if (b === 0) {
    return NaN;
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
  return Number(a) * Number(b)
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
  function percentage(value, percent) { //READY
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
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  if (numbers.length === 0) {
    return NaN;
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
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  var mean = sum / numbers.length;
  return mean;
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var result = [];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      result.push(str[i]);
    }
  }
  return result;
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(str) {
  return str.join('')
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
  return char === char.toLowerCase() && /[a-z]/.test(char);
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
