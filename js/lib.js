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
  return  Number(a)/Number(b);
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


function sum(a , b ) {
  return Number(a) + Number(b)
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return (Number(value)/100)*Number(percent);
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  return Math.round(Number(number))
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr.push(numbers[i])
    }
  }
  return arr;
}

/**
 * This function get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  // Write your code here
  return Math.max(...numbers);
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  let a = Math.max(...numbers);
  let b = Math.min(...numbers);
  return {max: a, min: b}
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum +=numbers[i];
  }
  return Math.round(sum/numbers.length);
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  // Write your code here
  let result = [];
  let mas = str.split('');
  for (let i = 0; i < mas.length; i++) {
    if(/[AEIOUaeiou]/.test(mas[i])){
      result.push(mas[i]);
    }
  }
  return result;
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function concatString(...str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    string +=str[i];
  }
  return string;
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */

function splitString(str, divider) {
  // Write your code here
  if (str === "") return str;
  return str.split(divider);
}

/**
 * This function return true if string contains substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  // Write your code here
  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  // Write your code here
  if(char === char.toUpperCase()) return false;
  return true;
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
  concatString,
  splitString,
  hasSubString,
  isLowerCase
}
