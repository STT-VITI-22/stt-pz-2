/**
 * This function must subtraction two numbers and return result of subtraction
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  // Write your code here
	return Number(a) - Number(b)
}

/**
 * This function must division two numbers and return result according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  // Write your code here
	return Number(a) / Number(b)
}

/**
 * This function return result of multiplication two numbers according to all arithmetic rules
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  // Write your code here
	return Number(a) * Number(b)
}

/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  // Write your code here
	return Number(value) * Number(percent) / 100
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  // Write your code here
return Math.floor(numbers)
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  // Write your code here
	var result = numbers.filter(x => x % 2 == 0)
	return result;
	
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  // Write your code here
	return Math.max(numbers)
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  // Write your code here
	return Math.max(numbers), Math.min(numbers)
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  // Write your code here
	let count = numbers.length;
	let sum = 0;
	for (let i = 0; i < count; i++ ) {
  	sum += numbers[i];
	}
	return sum/count; 
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  // Write your code here
	let count = str.length;
	let strArr = str.split("");
	let strArr2 = [];
	for (let i = 0; i < count; i++ ) {
  	if(str[i] == "a"){
      strArr2 += str[i];
    
    }
    if(str[i] == "e"){
      strArr2 += str[i];
    
    }
    if(str[i] == "u"){
      strArr2 += str[i];
    
    }
    if(str[i] == "i"){
      strArr2 += str[i];
    
    }
    if(str[i] == "o"){
      strArr2 += str[i];
    
    }
}
  return strArr2
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(str) {
  // Write your code here
	let count = str.length;
	let strArr2 = "";
	for (let i = 0; i < count; i++ ) {
     strArr2 += str[i]
	}
 
	return strArr2
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */

function splitString(str, divider) {
  // Write your code here
	let arr = str.split(divider);
	return arr;
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
if(char == char.toLowerCase()){
  return true;
}
if(char == char.toUpperCase()){
  return false;
}
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
