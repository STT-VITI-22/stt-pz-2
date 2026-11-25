/**
 * Ця функція має відняти два числа та повернути результат віднімання
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function subtraction(a, b) {
  // Перетворюємо вхідні дані в числа та повертаємо їх різницю
  return Number(a) - Number(b);
}

/**
 * Ця функція має ділити два числа та повернути результат згідно з усіма арифметичними правилами
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function division(a, b) {
  // Перетворюємо вхідні дані в числа
  const numB = Number(b);
  
  // Перевірка ділення на нуль
  // Відповідно до правил JavaScript, ділення на 0 дає Infinity або -Infinity
  if (numB === 0) {
    console.warn("Спроба ділення на нуль.");
  }
  
  // Повертаємо результат ділення
  return Number(a) / numB;
}

/**
 * Ця функція повертає результат множення двох чисел згідно з усіма арифметичними правилами
 * @param a {number|string}
 * @param b {number|string}
 * @returns {number}
 */
function multiplication(a, b) {
  // Перетворюємо вхідні дані в числа та повертаємо їх добуток
  return Number(a) * Number(b);
}

/**
 * Ця функція обчислює відсоток від числа згідно з усіма арифметичними правилами
 * @param value {number|string}
 * @param percent {number|string}
 * @returns {number}
 */
function percentage(value, percent) {
  // Обчислюємо відсоток за формулою (значення * відсоток) / 100
  return (Number(value) * Number(percent)) / 100;
}

/**
 * Ця функція повертає цілу частину числа
 * @param number {number|string}
 * @returns {number}
 */
function getWholeNumberPart(number) {
  // Використовуємо Math.trunc() для відсікання дробової частини
  return Math.trunc(Number(number));
}

/**
 * Ця функція отримує масив натуральних чисел і повертає масив парних чисел
 * @param numbers {number[]}
 * @returns {number[]}
 */
function getEvenNumbers(numbers) {
  // Фільтруємо масив, залишаючи тільки ті числа, що діляться на 2 без залишку
  return numbers.filter(num => num % 2 === 0);
}

/**
 * Ця функція знаходить максимальне число з масиву
 * @param numbers {number[]}
 * @returns {number}
 */
function getMaxNumber(numbers) {
  // Перевіряємо, чи масив не порожній
  if (numbers.length === 0) {
    return -Infinity; // Або null, або undefined, залежно від вимог
  }
  // Використовуємо Math.max з оператором spread (...)
  return Math.max(...numbers);
}

/**
 * Ця функція повертає об'єкт з мінімальним та максимальним числом з масиву
 * @param numbers {number[]}
 * @returns {{min: number, max: number}}
 */
function getMinAndMaxNumbers(numbers) {
  // Перевіряємо, чи масив не порожній
  if (numbers.length === 0) {
    return { min: null, max: null };
  }
  
  // Знаходимо min і max
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  
  return { min, max };
}

/**
 * Ця функція обчислює середнє арифметичне з масиву чисел
 * @param numbers {number[]}
 * @returns {number}
 */
function arithmeticMeans(numbers) {
  // Перевіряємо, чи масив не порожній, щоб уникнути ділення на нуль
  if (numbers.length === 0) {
    return 0; // Середнє арифметичне порожнього набору часто визначають як 0
  }
  
  // Знаходимо суму всіх елементів масиву
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
  // Ділимо суму на кількість елементів
  return sum / numbers.length;
}

/**
 * Ця функція повертає масив голосних літер з рядка
 * @param str {string}
 * @returns {string[]}
 */
function getVowels(str) {
  // Список голосних (українські та англійські, враховуючи регістр)
  // Для простоти, візьмемо тільки англійські, як це часто буває в задачах
  const vowels = 'aeiouAEIOU';
  
  // Розбиваємо рядок на символи, фільтруємо голосні
  return str.split('').filter(char => vowels.includes(char));
}

/**
 * Ця функція об'єднує масив рядків в один рядок
 * @param str {string[]}
 * @returns {string}
 */
// Виправлена сигнатура функції, щоб відповідати JSDoc
function cancatString(str) {
  // Використовуємо метод join для об'єднання елементів масиву в рядок
  return str.join('');
}

/**
 * Ця функція розділяє рядок відповідно до роздільника
 * @param str {string}
 * @param divider {string}
 * @returns {string[]}
 */
function splitString(str, divider) {
  // Використовуємо вбудований метод split
  return str.split(divider);
}

/**
 * Ця функція повертає true, якщо рядок містить підрядок
 * @param str {string}
 * @param subStr {string}
 * @returns {boolean}
 */
function hasSubString(str, subStr) {
  // Використовуємо вбудований метод includes
  return str.includes(subStr);
}

/**
 * Ця функція повертає true, якщо символ у нижньому регістрі
 * @param char {string}
 * @returns {boolean}
 */
function isLowerCase(char) {
  // Перевіряємо, чи дорівнює символ самому собі в нижньому регістрі
  // Це також поверне true для цифр та символів, що не є літерами
  return char === char.toLowerCase();
}

// У вашому списку експорту була функція `sum`, але вона не була визначена.
// Я видалив її зі списку.
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