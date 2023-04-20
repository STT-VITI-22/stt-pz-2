function sum(a,b) {
  return a+b;
}


/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  return a-b;
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  return a/b;
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  return a*b;
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return (value * percent)/100;
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  return Math.trunc(number);
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

/**
 * This function get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  return Math.max(...numbers)
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const mas = [max,min]
  return mas;
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  const vowels = 'aeiouAEIOU';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      result += char
    }
  }
  return result;
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString() {
  let result = '';
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */

function splitString(str, divider) {
  if (divider === '') {
    return Array.from(str);
  }
  const result = [];
  let startIndex = 0;

  while (true) {
    const endIndex = str.indexOf(divider, startIndex);
    if (endIndex === -1) {
      result.push(str.substring(startIndex));
      break;
    } else {
      result.push(str.substring(startIndex, endIndex));
      startIndex = endIndex + divider.length;
    }
  }
  return result;
}

/**
 * This function return true if string contains substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + subStr.length) === subStr) {
      return true;
    }
  }
  return false;
}

/**
 * This function return true if char is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
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
