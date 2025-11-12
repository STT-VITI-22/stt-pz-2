
const { 
  subtraction, division, multiplication, percentage, getWholeNumberPart,
  getEvenNumbers, getMaxNumber, getMinAndMaxNumbers, arithmeticMeans,
  getVowels, cancatString, splitString, hasSubString, isLowerCase
} = require('./lib.js');

describe('subtraction', () => {

  it('повинна правильно віднімати два позитивні цілі числа', () => {
    expect(subtraction(5, 2)).toBe(3);
  });

  it('повинна правильно віднімати два негативні цілі числа', () => {
    expect(subtraction(-5, -2)).toBe(-3);
  });

  it('повинна правильно віднімати негативне число від позитивного', () => {
    expect(subtraction(5, -2)).toBe(7);
  });

  it('повинна правильно віднімати позитивне число від негативного', () => {
    expect(subtraction(-5, 2)).toBe(-7);
  });

  it('повинна правильно віднімати з нуля', () => {
    expect(subtraction(0, 10)).toBe(-10);
  });

  it('повинна правильно віднімати нуль', () => {
    expect(subtraction(10, 0)).toBe(10);
  });

  it('повинна повертати 0 при відніманні нуля від нуля', () => {
    expect(subtraction(0, 0)).toBe(0);
  });

  it('повинна правильно віднімати числа з плаваючою комою', () => {
    expect(subtraction(5.5, 2.2)).toBeCloseTo(3.3);
  });

  it('повинна правильно обробляти відому проблему з точністю (0.3 - 0.1)', () => {
    expect(subtraction(0.3, 0.1)).toBeCloseTo(0.2);
  });

  it('повинна правильно віднімати числові рядки', () => {
    expect(subtraction("10", "5")).toBe(5);
  });

  it('повинна правильно віднімати змішані типи (число і рядок)', () => {
    expect(subtraction(10, "5")).toBe(5);
  });

  it('повинна правильно віднімати змішані типи (рядок і число)', () => {
    expect(subtraction("10", 5)).toBe(5);
  });

  it('повинна правильно віднімати рядки з плаваючою комою', () => {
    expect(subtraction("10.5", "0.5")).toBe(10);
  });

  it('повинна повертати NaN, якщо перший аргумент - нечисловий рядок', () => {
    expect(subtraction("hello", 5)).toBeNaN();
  });

  it('повинна повертати NaN, якщо другий аргумент - нечисловий рядок', () => {
    expect(subtraction(5, "world")).toBeNaN();
  });

  it('повинна повертати NaN, якщо обидва аргументи - нечислові рядки', () => {
    expect(subtraction("hello", "world")).toBeNaN();
  });

  it('повинна трактувати null як 0 (10 - null)', () => {
    expect(subtraction(10, null)).toBe(10);
  });

  it('повинна трактувати null як 0 (null - 10)', () => {
    expect(subtraction(null, 10)).toBe(-10);
  });

  it('повинна повертати 0, якщо обидва аргументи null', () => {
    expect(subtraction(null, null)).toBe(0);
  });

  it('повинна повертати NaN, якщо перший аргумент undefined', () => {
    expect(subtraction(undefined, 10)).toBeNaN();
  });

  it('повинна повертати NaN, якщо другий аргумент undefined', () => {
    expect(subtraction(10, undefined)).toBeNaN();
  });

  it('повинна правильно обробляти нескінченність (Infinity)', () => {
    expect(subtraction(Infinity, 10)).toBe(Infinity);
    expect(subtraction(10, Infinity)).toBe(-Infinity);
  });

  it('повинна повертати NaN для Infinity - Infinity', () => {
    expect(subtraction(Infinity, Infinity)).toBeNaN();
  });

});
describe('division', () => {

  it('повинна правильно ділити два позитивні цілі числа', () => {
    expect(division(10, 2)).toBe(5);
  });

  it('повинна правильно ділити два негативні цілі числа', () => {
    expect(division(-10, -2)).toBe(5);
  });

  it('повинна правильно ділити позитивне на негативне', () => {
    expect(division(10, -2)).toBe(-5);
  });

  it('повинна правильно ділити негативне на позитивне', () => {
    expect(division(-10, 2)).toBe(-5);
  });

  it('повинна правильно ділити нуль на число', () => {
    expect(division(0, 10)).toBe(0);
  });

  it('повинна повертати Infinity при діленні позитивного числа на 0', () => {
    expect(division(10, 0)).toBe(Infinity);
  });

  it('повинна повертати -Infinity при діленні негативного числа на 0', () => {
    expect(division(-10, 0)).toBe(-Infinity);
  });

  it('повинна повертати NaN при діленні 0 на 0', () => {

    expect(division(0, 0)).toBeNaN();
  });

  it('повинна правильно ділити числа з плаваючою комою', () => {
    expect(division(5.5, 2)).toBeCloseTo(2.75);
  });

  it('повинна правильно обробляти дробовий результат', () => {
    expect(division(1, 3)).toBeCloseTo(0.333333);
  });

  it('повинна правильно ділити числові рядки', () => {
    expect(division("10", "2")).toBe(5);
  });

  it('повинна правильно ділити змішані типи (число і рядок)', () => {
    expect(division(10, "2")).toBe(5);
  });

  it('повинна повертати Infinity при діленні на рядок "0"', () => {
    expect(division(10, "0")).toBe(Infinity);
  });

  it('повинна повертати NaN, якщо перший аргумент - нечисловий рядок', () => {
    expect(division("hello", 5)).toBeNaN();
  });

  it('повинна повертати NaN, якщо другий аргумент - нечисловий рядок', () => {
    expect(division(5, "world")).toBeNaN();
  });

  it('повинна трактувати null як 0 (10 / null)', () => {
    expect(division(10, null)).toBe(Infinity);
  });

  it('повинна трактувати null як 0 (null / 10)', () => {
    expect(division(null, 10)).toBe(0);
  });

  it('повинна повертати NaN, якщо обидва аргументи null', () => {
    expect(division(null, null)).toBeNaN();
  });

  it('повинна повертати NaN, якщо перший аргумент undefined', () => {
    expect(division(undefined, 10)).toBeNaN();
  });

  it('повинна повертати NaN, якщо другий аргумент undefined', () => {
    expect(division(10, undefined)).toBeNaN();
  });

  it('повинна правильно обробляти нескінченність (Infinity)', () => {
    expect(division(Infinity, 10)).toBe(Infinity);
    expect(division(10, Infinity)).toBe(0);
  });

  it('повинна повертати NaN для Infinity / Infinity', () => {
    expect(division(Infinity, Infinity)).toBeNaN();
  });
});
describe('multiplication', () => {

  it('повинна правильно множити два позитивні цілі числа', () => {
    expect(multiplication(5, 3)).toBe(15);
  });

  it('повинна правильно множити позитивне і негативне число', () => {
    expect(multiplication(5, -3)).toBe(-15);
  });

  it('повинна правильно множити два негативні цілі числа', () => {
    expect(multiplication(-5, -3)).toBe(15);
  });

  it('повинна правильно множити на нуль', () => {
    expect(multiplication(10, 0)).toBe(0);
  });

  it('повинна повертати 0 при множенні 0 на 0', () => {
    expect(multiplication(0, 0)).toBe(0);
  });

  // --- Тести на числах з плаваючою комою ---

  it('повинна правильно множити числа з плаваючою комою', () => {
    // Використовуємо toBeCloseTo для точності
    expect(multiplication(1.5, 2.5)).toBeCloseTo(3.75);
  });

  it('повинна правильно обробляти відому проблему з точністю (0.1 * 0.2)', () => {
    expect(multiplication(0.1, 0.2)).toBeCloseTo(0.02);
  });

  // --- Тести на привідних типах (рядки) ---

  it('повинна правильно множити числові рядки', () => {
    expect(multiplication("5", "3")).toBe(15);
  });

  it('повинна правильно множити змішані типи (число і рядок)', () => {
    expect(multiplication(5, "3")).toBe(15);
  });

  // --- Тести на граничних і невалідних значеннях ---

  it('повинна повертати NaN, якщо один з аргументів - нечисловий рядок', () => {
    expect(multiplication("hello", 5)).toBeNaN();
    expect(multiplication(5, "world")).toBeNaN();
  });

  it('повинна повертати NaN, якщо обидва аргументи - нечислові рядки', () => {
    expect(multiplication("hello", "world")).toBeNaN();
  });

  it('повинна трактувати null як 0', () => {
    // 10 * Number(null) = 10 * 0 = 0
    expect(multiplication(10, null)).toBe(0);
  });

  it('повинна повертати 0, якщо обидва аргументи null', () => {
    // 0 * 0 = 0
    expect(multiplication(null, null)).toBe(0);
  });

  it('повинна повертати NaN, якщо один з аргументів undefined', () => {
    // Number(undefined) = NaN
    expect(multiplication(undefined, 10)).toBeNaN();
    expect(multiplication(10, undefined)).toBeNaN();
  });

  it('повинна правильно обробляти нескінченність (Infinity * число)', () => {
    expect(multiplication(Infinity, 5)).toBe(Infinity);
    expect(multiplication(Infinity, -5)).toBe(-Infinity);
  });

  it('повинна правильно обробляти нескінченність (Infinity * Infinity)', () => {
    expect(multiplication(Infinity, Infinity)).toBe(Infinity);
  });
  
  it('повинна повертати NaN для Infinity * 0', () => {
    // В JavaScript Infinity * 0 = NaN
    expect(multiplication(Infinity, 0)).toBeNaN();
  });
});
describe('percentage', () => {

  it('повинна правильно обчислювати відсоток (25% від 200)', () => {
    expect(percentage(200, 25)).toBe(50);
  });

  it('повинна правильно обчислювати 100% від числа', () => {
    expect(percentage(50, 100)).toBe(50);
  });

  it('повинна правильно обчислювати 0% від числа', () => {
    expect(percentage(100, 0)).toBe(0);
  });

  it('повинна правильно обчислювати відсоток від 0', () => {
    expect(percentage(0, 50)).toBe(0);
  });
  
  it('повинна правильно обчислювати відсоток для чисел з плаваючою комою', () => {
    expect(percentage(150, 10.5)).toBeCloseTo(15.75);
  });

  it('повинна правильно обробляти від\'ємний відсоток', () => {
    expect(percentage(100, -10)).toBe(-10);
  });

  it('повинна правильно обробляти від\'ємне значення', () => {
    expect(percentage(-100, 10)).toBe(-10);
  });


  it('повинна правильно обчислювати відсоток для числових рядків', () => {
    expect(percentage("200", "25")).toBe(50);
  });

  it('повинна правильно обчислювати відсоток для змішаних типів (число і рядок)', () => {
    expect(percentage(100, "5")).toBe(5);
  });

  it('повинна трактувати null як 0 (null value)', () => {
    expect(percentage(null, 50)).toBe(0);
  });

  it('повинна трактувати null як 0 (null percent)', () => {
    expect(percentage(100, null)).toBe(0);
  });

  it('повинна повертати NaN, якщо value - undefined', () => {

    expect(percentage(undefined, 10)).toBeNaN();
  });

  it('повинна повертати NaN, якщо percent - undefined', () => {
    expect(percentage(10, undefined)).toBeNaN();
  });

  it('повинна повертати NaN, якщо один з аргументів - нечисловий рядок', () => {
    expect(percentage("abc", 10)).toBeNaN();
    expect(percentage(10, "xyz")).toBeNaN();
  });

  it('повинна правильно обробляти Infinity (Infinity value)', () => {
    expect(percentage(Infinity, 10)).toBe(Infinity);
  });

  it('повинна правильно обробляти Infinity (Infinity percent)', () => {
    // (10 * Infinity) / 100 = Infinity
    expect(percentage(10, Infinity)).toBe(Infinity);
  });

  it('повинна повертати NaN для (Infinity * 0) / 100', () => {
    expect(percentage(Infinity, 0)).toBeNaN();
  });
});
describe('getWholeNumberPart', () => {

  it('повинна повертати цілу частину позитивного числа з плаваючою комою', () => {
    expect(getWholeNumberPart(12.34)).toBe(12);
  });

  it('повинна повертати цілу частину негативного числа з плаваючою комою (відкидання дробової частини)', () => {
    expect(getWholeNumberPart(-12.87)).toBe(-12);
  });

  it('повинна повертати те ж саме число, якщо воно ціле позитивне', () => {
    expect(getWholeNumberPart(42)).toBe(42);
  });

  it('повинна повертати те ж саме число, якщо воно ціле негативне', () => {
    expect(getWholeNumberPart(-10)).toBe(-10);
  });

  it('повинна повертати 0 для 0', () => {
    expect(getWholeNumberPart(0)).toBe(0);
  });

  it('повинна повертати 0 для числа між 0 і 1', () => {
    expect(getWholeNumberPart(0.999)).toBe(0);
  });

  it('повинна правильно обробляти числовий рядок з плаваючою комою', () => {
    expect(getWholeNumberPart("55.67")).toBe(55);
  });

  it('повинна правильно обробляти цілий числовий рядок', () => {
    expect(getWholeNumberPart("-15")).toBe(-15);
  });

  it('повинна повертати NaN для нечислового рядка', () => {
    expect(getWholeNumberPart("hello")).toBeNaN();
  });

  it('повинна трактувати null як 0', () => {
    expect(getWholeNumberPart(null)).toBe(0);
  });

  it('повинна повертати NaN для undefined', () => {
    expect(getWholeNumberPart(undefined)).toBeNaN();
  });

  it('повинна правильно обробляти Infinity', () => {
    expect(getWholeNumberPart(Infinity)).toBe(Infinity);
  });

  it('повинна правильно обробляти -Infinity', () => {
    expect(getWholeNumberPart(-Infinity)).toBe(-Infinity);
  });
});
describe('getEvenNumbers', () => {

  it('повинна повертати лише парні числа з масиву', () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it('повинна правильно обробляти масив, що містить 0', () => {
    expect(getEvenNumbers([0, 1, 2, 3])).toEqual([0, 2]);
  });

  it('повинна повертати порожній масив, якщо немає парних чисел', () => {
    expect(getEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  it('повинна повертати порожній масив для порожнього вхідного масиву', () => {
    expect(getEvenNumbers([])).toEqual([]);
  });

  it('повинна обробляти негативні парні та непарні числа', () => {
    expect(getEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
  });
});
describe('getMaxNumber', () => {

  it('повинна повертати найбільше число в масиві позитивних чисел', () => {
    expect(getMaxNumber([1, 5, 3, 10, 2])).toBe(10);
  });

  it('повинна повертати найбільше число в масиві негативних чисел', () => {
    expect(getMaxNumber([-10, -5, -8, -1])).toBe(-1);
  });

  it('повинна повертати найбільше число в змішаному масиві', () => {
    expect(getMaxNumber([-10, 5, 0, 100])).toBe(100);
  });

  it('повинна повертати -Infinity для порожнього масиву', () => {
    expect(getMaxNumber([])).toBe(-Infinity);
  });

  it('повинна правильно обробляти масив з одним елементом', () => {
    expect(getMaxNumber([7])).toBe(7);
  });
});
describe('getMinAndMaxNumbers', () => {

  it('повинна повертати min та max для позитивних чисел', () => {
    expect(getMinAndMaxNumbers([10, 5, 20, 1])).toEqual({ min: 1, max: 20 });
  });

  it('повинна повертати min та max для негативних чисел', () => {
    expect(getMinAndMaxNumbers([-10, -5, -20, -1])).toEqual({ min: -20, max: -1 });
  });

  it('повинна повертати min та max для змішаного масиву', () => {
    expect(getMinAndMaxNumbers([-5, 0, 10, -1])).toEqual({ min: -5, max: 10 });
  });

  it('повинна повертати { min: null, max: null } для порожнього масиву', () => {
    expect(getMinAndMaxNumbers([])).toEqual({ min: null, max: null });
  });

  it('повинна правильно обробляти масив з одним елементом', () => {
    expect(getMinAndMaxNumbers([42])).toEqual({ min: 42, max: 42 });
  });
});
describe('arithmeticMeans', () => {

  it('повинна обчислювати середнє арифметичне для простих чисел', () => {
    // (1 + 2 + 3 + 4) / 4 = 2.5
    expect(arithmeticMeans([1, 2, 3, 4])).toBe(2.5);
  });

  it('повинна обчислювати середнє арифметичне для чисел з плаваючою комою', () => {
    // (1.5 + 2.5) / 2 = 2
    expect(arithmeticMeans([1.5, 2.5])).toBe(2);
  });

  it('повинна обробляти негативні числа', () => {
    // (10 + -10 + 5) / 3 = 5/3
    expect(arithmeticMeans([10, -10, 5])).toBeCloseTo(1.666667);
  });

  it('повинна повертати 0 для порожнього масиву', () => {
    expect(arithmeticMeans([])).toBe(0);
  });

  it('повинна повертати значення елемента для масиву з одним елементом', () => {
    expect(arithmeticMeans([42])).toBe(42);
  });
});
describe('getVowels', () => {
  // Примітка: Функція працює лише з англійськими голосними ('aeiouAEIOU')

  it('повинна повернути всі англійські голосні з рядка, зберігаючи регістр', () => {
    expect(getVowels('Hello World')).toEqual(['e', 'o', 'o']);
  });

  it('повинна правильно обробляти рядок, що складається лише з голосних', () => {
    expect(getVowels('aeiouAEIOU')).toEqual(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  });

  it('повинна повертати порожній масив, якщо голосні відсутні', () => {
    expect(getVowels('rhythm')).toEqual([]);
  });

  it('повинна повертати порожній масив для порожнього рядка', () => {
    expect(getVowels('')).toEqual([]);
  });
});
describe('cancatString', () => {
  
  it('повинна об\'єднувати масив рядків в один рядок', () => {
    expect(cancatString(['Hello', ' ', 'World', '!'])).toBe('Hello World!');
  });

  it('повинна повертати порожній рядок для порожнього масиву', () => {
    expect(cancatString([])).toBe('');
  });
  
  it('повинна обробляти масив чисел (конвертуючи їх у рядки)', () => {
    expect(cancatString([1, 2, 3])).toBe('123');
  });
});
describe('splitString', () => {
  
  it('повинна розділяти рядок за вказаним роздільником', () => {
    expect(splitString('apple,banana,cherry', ',')).toEqual(['apple', 'banana', 'cherry']);
  });

  it('повинна розділяти рядок за пробілом', () => {
    expect(splitString('one two three', ' ')).toEqual(['one', 'two', 'three']);
  });

  it('повинна розділяти за пустим роздільником (на символи)', () => {
    expect(splitString('abc', '')).toEqual(['a', 'b', 'c']);
  });

  it('повинна повертати початковий рядок у масиві, якщо роздільник не знайдено', () => {
    expect(splitString('abc', 'z')).toEqual(['abc']);
  });

  it('повинна правильно обробляти пустий рядок', () => {
    expect(splitString('', ' ')).toEqual(['']);
  });
});
describe('hasSubString', () => {
  
  it('повинна повертати true, якщо підрядок знайдено', () => {
    expect(hasSubString('Full Stack Developer', 'Stack')).toBe(true);
  });

  it('повинна повертати false, якщо підрядок не знайдено', () => {
    expect(hasSubString('Full Stack Developer', 'Engineer')).toBe(false);
  });

  it('повинна бути чутливою до регістру', () => {
    expect(hasSubString('Full Stack Developer', 'stack')).toBe(false);
  });

  it('повинна повертати true, якщо підрядок є порожнім рядком', () => {
    expect(hasSubString('Hello', '')).toBe(true);
  });

  it('повинна повертати false, якщо основний рядок порожній, а підрядок — ні', () => {
    expect(hasSubString('', 'a')).toBe(false);
  });
});
describe('isLowerCase', () => {
  // Примітка: Реалізація повертає true для цифр та символів, що не є літерами.

  it('повинна повертати true для символу в нижньому регістрі', () => {
    expect(isLowerCase('a')).toBe(true);
  });

  it('повинна повертати false для символу у верхньому регістрі', () => {
    expect(isLowerCase('B')).toBe(false);
  });

  it('повинна повертати true для цифри', () => {
    expect(isLowerCase('9')).toBe(true);
  });

  it('повинна повертати true для пробілу', () => {
    expect(isLowerCase(' ')).toBe(true);
  });

  it('повинна повертати true для порожнього рядка', () => {
    expect(isLowerCase('')).toBe(true);
  });
  
  it('повинна повертати true, якщо рядок складається з кількох символів нижнього регістру', () => {
    expect(isLowerCase('abc')).toBe(true);
  });

  it('повинна повертати false, якщо рядок містить хоча б один символ верхнього регістру', () => {
    expect(isLowerCase('aBc')).toBe(false);
  });
});