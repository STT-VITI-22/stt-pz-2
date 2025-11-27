// js/lib.js

/**
 * Ця функція віднімає два числа та повертає результат віднімання
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return NaN;
  return numA - numB;
}

/**
 * Ця функція ділить два числа та повертає результат згідно з усіма арифметичними правилами
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return NaN;
  if (numB === 0) return Infinity; // або можна throw new Error("Ділення на нуль")
  return numA / numB;
}

/**
 * Ця функція повертає результат множення двох чисел згідно з усіма арифметичними правилами
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return NaN;
  return numA * numB;
}

/**
 * Ця функція обчислює відсоток від числа згідно з усіма арифметичними правилами
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  const numValue = Number(value);
  const numPercent = Number(percent);
  if (isNaN(numValue) || isNaN(numPercent)) return NaN;
  return (numValue * numPercent) / 100;
}

/**
 * Ця функція повертає цілу частину числа
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  const num = Number(number);
  if (isNaN(num)) return NaN;
  return Math.trunc(num);
}

/**
 * Ця функція приймає масив натуральних чисел і повертає масив парних чисел
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) return [];
  return numbers.filter(num => typeof num === 'number' && num % 2 === 0);
}

/**
 * Ця функція повертає максимальне число з масиву
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  const validNums = numbers.filter(n => typeof n === 'number');
  if (validNums.length === 0) return null;  // ← ДОБАВЬ ЭТУ СТРОКУ
  return Math.max(...validNums);
}
/**
 * Ця функція повертає об'єкт з мінімальним та максимальним числом з масиву
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return { min: null, max: null };
  }
  const validNums = numbers.filter(n => typeof n === 'number');
  if (validNums.length === 0) return { min: null, max: null };
  return {
    min: Math.min(...validNums),
    max: Math.max(...validNums)
  };
}

/**
 * Ця функція обчислює середнє арифметичне з масиву чисел
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  const validNums = numbers.filter(n => typeof n === 'number');
  if (validNums.length === 0) return null;
  return validNums.reduce((a, b) => a + b, 0) / validNums.length;
}

/**
 * Ця функція повертає масив голосних літер зі строки
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  if (typeof str !== 'string') return [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  return str
    .toLowerCase()
    .split('')
    .filter(char => vowels.includes(char));
}

/**
 * Ця функція приймає масив рядків і об'єднує їх в один рядок
 * @param str {string[]}
 * @returns {string}
 */
function cancatString(str) {
  if (!Array.isArray(str)) return '';
  return str.filter(s => typeof s === 'string').join('');
}

/**
 * Ця функція розбиває рядок за роздільником
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */
function splitString(str, divider) {
  if (typeof str !== 'string' || typeof divider !== 'string') return [];
  return str.split(divider);
}

/**
 * Ця функція повертає true, якщо рядок містить підрядок
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  if (typeof str !== 'string' || typeof subStr !== 'string') return false;
  return str.includes(subStr);
}

/**
 * Ця функція повертає true, якщо символ у нижньому регістрі
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  if (typeof char !== 'string' || char.length !== 1) return false;
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

// Експорт
module.exports = {
  sum: (a, b) => Number(a) + Number(b),
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
};