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
    return percent / value * 100;
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
    let resultArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            resultArray.push(number);
        }
    });
    return resultArray;
}

/**
 * This function get Max number from array
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
    return {min: Math.min(...numbers), max: Math.max(...numbers)}
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
    let result = 0
    let length = numbers.length;
    for (let i = 0; i < length; i++) {
        result += numbers[i];
    }
    return result/length;
}

/**
 * This function return array of vowels form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
    let vowels = ["a","e","o","y","u"];
    let result = [];
    str.split("").forEach(char => {
        if (vowels.includes(char)){
            result.push(char);
        }
    });
    return result;
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function concatString(str) {
    let result = "";
    str.forEach((string) => {
        result += string;
    })
    return result;
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
    return char.toLowerCase() === char;
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
    concatString,
    splitString,
    hasSubString,
    isLowerCase
}
