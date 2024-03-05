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
/**
 * Функція для ділення двох чисел.
 * @param {number} a Ділене число.
 * @param {number} b Дільник.
 * @returns {number} Частка від ділення.
 * @throws {Error} Якщо дільник дорівнює нулю або якщо будь-який з параметрів не є числом.
 */
function division(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Обидва параметри повинні бути числами');
  }

  if (b === 0) {
    throw new Error('Ділення на нуль не допускається');
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
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }

  return a * b;
}


/**
 * This function calculate percent from number according to all arithmetic rules
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
 function percentage(value, percent) {
  if (percent < 0 || percent > 100) {
    throw new Error("Percentage must be between 0 and 100");
  }

  return (value * percent) / 100;
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
  // Фільтруємо масив чисел, залишаючи тільки парні числа
  return numbers.filter(number => number % 2 === 0);
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
  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}


/**
 * This function calculate arithmetic means from array of numbers
 * @param numbers {number[]}
 * @returns {number}
 */
 function arithmeticMeans(numbers) {
  if (numbers.length === 0) {
    return 0; // Повертаємо 0 для порожнього масиву
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}


/**
 * This function return array of vowerls form string
 * @param str {string}
 * @returns {string[]}
 */
 function getVowels(str) {
  // Оголошуємо змінну для зберігання голосних символів
  let vowels = '';

  // Перебираємо кожен символ рядка
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase(); // Переводимо символ у нижній регістр для порівняння

    // Перевіряємо, чи є поточний символ голосним
    if ('aeiou'.includes(char)) {
      vowels += char; // Додаємо голосний символ до результуючого рядка
    }
  }

  return vowels; // Повертаємо результуючий рядок голосних символів
}

/**
 * This function get array of string and concat them into one string
 * @param str {string[]}
 * @returns {string}
 */
 function cancatString() {
  // Оголошуємо змінну для зберігання результату конкатенації
  let result = '';

  // Перебираємо всі аргументи, які передані у функцію
  for (let i = 0; i < arguments.length; i++) {
    // Додаємо кожен аргумент до результату
    result += arguments[i];
  }

  // Повертаємо результат конкатенації
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
  return char === char.toLowerCase();
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
  isLowerCase
}
