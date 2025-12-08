/**
 * This function must add two numbers and return result of addition
 */
function sum(a, b) {
  return Number(a) + Number(b);
}

/**
 * This function must subtraction two numbers and return result of subtraction
 */
function subtraction(a, b) {
  return Number(a) - Number(b);
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 */
function division(a, b) {
  if (Number(b) === 0) throw new Error("Division by zero");
  return Number(a) / Number(b);
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 */
function multiplication(a, b) {
  return Number(a) * Number(b);
}

/**
 * This function calculate percent from number according to all arithmetic rules
 */
function percentage(value, percent) {
  return (Number(value) * Number(percent)) / 100;
}

/**
 * This function return whole part of number
 */
function getWholeNumberPart(number) {
  return Math.floor(Number(number));
}

/**
 * This function get array of natural number and return array of even number
 */
function getEvenNumbers(numbers) {
  return numbers.filter(n => n % 2 === 0);
}

/**
 * This function get Max number from array
 */
function getMaxNumber(numbers) {
  return Math.max(...numbers);
}

/**
 * This function return object with min and max number from array
 */
function getMinAndMaxNumbers(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

/**
 * This function calculate arithmetic means from array of numbers
 */
function arithmeticMeans(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

/**
 * This function return array of vowels from string
 */
function getVowels(str) {
  return Array.from(str).filter(c => 'aeiouAEIOU'.includes(c));
}

/**
 * This function get array of string and concat them into one string
 */
function cancatString(str) {
  return str.join('');
}

/**
 * This function split string according to divider
 */
function splitString(str, divider) {
  return str.split(divider);
}

/**
 * This function return true if string contains substring
 */
function hasSubString(str, subStr) {
  return str.includes(subStr);
}

/**
 * This function return true if char is in lower case
 */
function isLowerCase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

/**
 * This function find element in array by index
 */
function findElmentInArrayByIndex(array, index) {
  return array[index];
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
  isLowerCase,
  findElmentInArrayByIndex
};
