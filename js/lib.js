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
  if (b === 0) {
    throw new Error("Divison on zero is impossible");
  }
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
  const numericValue = parseFloat(value);
  const numericPercent = parseFloat(percent);

  if (isNaN(numericValue) || isNaN(numericPercent)) {
    throw new Error(
      "Input data must be numbers or strings that represent numbers."
    );
  }

  const result = (numericPercent / 100) * numericValue;

  return result;
}

/**
 * This function return whole part of number
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  const numericValue = parseFloat(number);

  if (isNaN(numericValue)) {
    throw new Error(
      "Input data must be numbers or strings representing numbers."
    );
  }

  // Отримання цілої частини числа
  const result = Math.floor(numericValue);

  return result;
}

/**
 * This function get array of natural number and return array of even number
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("The input data must be an array of natural numbers.");
  }

  // Фільтрація парних чисел
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return evenNumbers;
}

/**
 * This function get get Max number from array
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input data must be a non-empty array of numbers.");
  }

  // Знаходження максимального числа
  const maxNumber = Math.max(...numbers);

  return maxNumber;
}

/**
 * This function return object with min and  max number from array
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input data must be a non-empty array of numbers.");
  }

  // Знаходження мінімального та максимального чисел
  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);

  return { min: minNumber, max: maxNumber };
}

/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input data must be a non-empty array of numbers.");
  }

  // Обчислення середнього арифметичного
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;

  return mean;
}

/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  if (typeof str !== "string") {
    throw new Error("Input data must be a string.");
  }

  // Вибір голосних літер з рядка
  const vowels = str.toLowerCase().match(/[aeiou]/g) || [];

  return vowels;
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
function cancatString() {
  if (!Array.isArray(strings) || strings.length === 0) {
    throw new Error("Input data must be a non-empty array of strings.");
  }

  // Об'єднання рядків у один рядок
  const result = strings.join("");

  return result;
}

/**
 * This function split string according to divider
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */

function splitString(str, divider) {
  if (typeof str !== "string" || typeof divider !== "string") {
    throw new Error("Input data must be strings.");
  }

  // Розбиття рядка за роздільником
  const result = str.split(divider);

  return result;
}

/**
 * This function return true if string contains substring
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  if (typeof str !== "string" || typeof subStr !== "string") {
    throw new Error("Input data must be strings.");
  }

  // Перевірка, чи містить рядок підрядок
  const result = str.includes(subStr);

  return result;
}

/**
 * This function return true if char is in lower case
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  if (typeof char !== "string" || char.length !== 1) {
    throw new Error("Input data must be a single character string.");
  }

  // Перевірка, чи є символ у нижньому регістрі
  const result = char === char.toLowerCase();

  return result;
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
