/**
 * This function must sum two numbers and return result of sum
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function sum(a,b){
  return a + b;
}

/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  return a / b;
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  return (value / percent) * 100;
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  return Math.floor(number);
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
   return numbers.filter(numbers => numbers % 2 === 0);
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
 * This function return object with min and  max number from array
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
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return NaN; // або 0, якщо хочеш повертати 0 для порожнього масиву
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

/**
 * This function returns array of vowels from string
 * @param {string} str
 * @returns {string[]}
 */
function getVowels(str) {
  const vowels = 'aeiouAEIOU';
  return Array.from(str).filter(char => vowels.includes(char));
}


/**
 * This function gets array of strings and concats them into one string
 * @param {string[]} str
 * @returns {string}
 */
function cancatString(str) {
  return str.join('');
}


/**
 * This function splits string according to divider
 * @param {string} str
 * @param {string} divider
 * @returns {string[]}
 */
function splitString(str, divider) {
  return str.split(divider);
}


/**
 * This function returns true if string contains substring
 * @param {string} str
 * @param {string} subStr
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  return str.includes(subStr);
}


/**
 * This function returns true if char is in lower case
 * @param {string} char
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
