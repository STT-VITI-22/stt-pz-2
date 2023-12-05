function calculateSubtraction(a, b) {
  return a - b;
}

function calculateDivision(a, b) {
  if (b === 0) {
    throw new Error("Ділення на нуль не можливе");
  }
  return a / b;
}

function calculateMultiplication(a, b) {
  return a * b;
}

function calculatePercentage(value, percent) {
  const numericValue = parseFloat(value);
  const numericPercent = parseFloat(percent);

  if (isNaN(numericValue) || isNaN(numericPercent)) {
    throw new Error(
      "Вхідні дані мають бути числовими або строковими, які представляють числа."
    );
  }

  const result = (numericPercent / 100) * numericValue;

  return result;
}

function getWholePart(number) {
  const numericValue = parseFloat(number);

  if (isNaN(numericValue)) {
    throw new Error(
      "Вхідні дані мають бути числовими або строковими, які представляють числа."
    );
  }

  const result = Math.floor(numericValue);

  return result;
}

function filterEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Вхідні дані мають бути масивом натуральних чисел.");
  }

  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return evenNumbers;
}

function findMaxNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Вхідні дані мають бути не пустим масивом чисел.");
  }

  const maxNumber = Math.max(...numbers);

  return maxNumber;
}

function findMinMaxNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Вхідні дані мають бути не пустим масивом чисел.");
  }

  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);

  return { min: minNumber, max: maxNumber };
}

function calculateArithmeticMean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Вхідні дані мають бути не пустим масивом чисел.");
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;

  return mean;
}

function extractVowels(str) {
  if (typeof str !== "string") {
    throw new Error("Вхідні дані мають бути строковими.");
  }

  const vowels = str.toLowerCase().match(/[aeiou]/g) || [];

  return vowels;
}

function concatenateStrings(str) {
  return str.join("");
}

function splitString(str, divider) {
  if (typeof str !== "string" || typeof divider !== "string") {
    throw new Error("Вхідні дані мають бути строковими.");
  }

  const result = str.split(divider);

  return result;
}

function containsSubstring(str, subStr) {
  if (typeof str !== "string" || typeof subStr !== "string") {
    throw new Error("Вхідні дані мають бути строковими.");
  }

  const result = str.includes(subStr);

  return result;
}

function isCharLowerCase(char) {
  if (typeof char !== "string" || char.length !== 1) {
    throw new Error("Вхідні дані мають бути одним строковим символом.");
  }

  const result = char === char.toLowerCase();

  return result;
}

module.exports = {
  calculatePercentage,
  findMinMaxNumbers,
  containsSubstring,
  calculateDivision,
  calculateArithmeticMean,
  calculateMultiplication,
  calculateSubtraction,
  findMaxNumber,
  concatenateStrings,
  getWholePart,
  isCharLowerCase,
  extractVowels,
  filterEvenNumbers,
  splitString,
};

