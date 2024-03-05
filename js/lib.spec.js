const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4); // Очікуване значення 4, а не 3
    });
  });
describe('Тестування функції division', () => {
  it('Повертає правильний результат ділення двох чисел', () => {
    expect(lib.division(10, 2)).toEqual(5); // 10 / 2 = 5
    expect(lib.division(-6, 3)).toEqual(-2); // -6 / 3 = -2
    expect(lib.division(1.5, 0.5)).toEqual(3); // 1.5 / 0.5 = 3
  });

  it('Генерує помилку при діленні на нуль', () => {
    expect(() => {
      lib.division(8, 0);
    }).toThrow('Ділення на нуль не допускається');
  });

  it('Генерує помилку при передачі не числових параметрів', () => {
    expect(() => {
      lib.division('10', 2);
    }).toThrow('Обидва параметри повинні бути числами');

    expect(() => {
      lib.division(10, '2');
    }).toThrow('Обидва параметри повинні бути числами');
  });
});

  describe('Test suite for testing lib.js', () => {
    describe('Test suite for testing multiplication function', () => {
      it('should return multiplication of two numbers', () => {
        expect(lib.multiplication(5, 2)).toEqual(10);
        expect(lib.multiplication(-3, 4)).toEqual(-12);
        expect(lib.multiplication(0, 10)).toEqual(0);
      });
  
      it('should throw an error if any parameter is not a number', () => {
        expect(() => {
          lib.multiplication('5', 2);
        }).toThrow('Both parameters must be numbers');
  
        expect(() => {
          lib.multiplication(5, '2');
        }).toThrow('Both parameters must be numbers');
      });
    });
  });
  

  describe('Test suite for testing lib.js', () => {
    describe('Test suite for testing percentage function', () => {
      it('should return percentage of a value', () => {
        expect(lib.percentage(50, 20)).toEqual(10); // Очікуємо 10 (20% від 50)
        expect(lib.percentage(200, 50)).toEqual(100); // Очікуємо 100 (50% від 200)
      });
  
      it('should throw an error if percentage is less than 0', () => {
        expect(() => {
          lib.percentage(100, -10);
        }).toThrow('Percentage must be between 0 and 100');
      });
  
      it('should throw an error if percentage is greater than 100', () => {
        expect(() => {
          lib.percentage(100, 110);
        }).toThrow('Percentage must be between 0 and 100');
      });
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return whole number part of a number', () => {
      expect(lib.getWholeNumberPart(3.14)).toEqual(3); // Ціла частина 3.14 - 3
      expect(lib.getWholeNumberPart(10)).toEqual(10); // Ціла частина 10 - 10
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return even numbers from an array', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      expect(lib.getEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return maximum number from an array', () => {
      expect(lib.getMaxNumber([1, 5, 3, 9, 2])).toEqual(9);
      expect(lib.getMaxNumber([-10, -5, -20, -25])).toEqual(-5);
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return minimum and maximum numbers from an array', () => {
      expect(lib.getMinAndMaxNumbers([1, 5, 3, 9, 2])).toEqual({ min: 1, max: 9 });
      expect(lib.getMinAndMaxNumbers([-10, -5, -20, -25])).toEqual({ min: -25, max: -5 });
    });

    
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should return arithmetic mean of numbers in an array', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3); // Середнє арифметичне: (1 + 2 + 3 + 4 + 5) / 5 = 3
      expect(lib.arithmeticMeans([10, 20, 30, 40, 50])).toEqual(30); // Середнє арифметичне: (10 + 20 + 30 + 40 + 50) / 5 = 30
      expect(lib.arithmeticMeans([])).toEqual(0); // Повертаємо 0 для порожнього масиву
    });
  });
  

  describe('Test suite for testing getVowels function', () => {
    it('should return vowels from a string', () => {
      expect(lib.getVowels('hello')).toEqual('eo'); // Голосні букви у "hello": e, o
      expect(lib.getVowels('world')).toEqual('o'); // Голосна буква у "world": o
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if substring exists in a string', () => {
      expect(lib.hasSubString('hello world', 'world')).toEqual(true);
      expect(lib.hasSubString('hello world', 'universe')).toEqual(false);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true if character is lowercase', () => {
      expect(lib.isLowerCase('a')).toEqual(true); // Маленька літера 'a'
      expect(lib.isLowerCase('A')).toEqual(false); // Велика літера 'A'
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should return array of substrings split by a delimiter', () => {
      expect(lib.splitString('hello world', ' ')).toEqual(['hello', 'world']); // Розбиття "hello world" по пробілу
      expect(lib.splitString('apple,banana,cherry', ',')).toEqual(['apple', 'banana', 'cherry']); // Розбиття "apple,banana,cherry" по комі
    });
  });
  describe('Test suite for testing cancatString function', () => {
    it('should return concatenated string of all arguments', () => {
      expect(lib.cancatString('Hello', ' ', 'world')).toEqual('Hello world'); // Очікуваний результат конкатенації: 'Hello world'
      expect(lib.cancatString('JavaScript', ' ', 'is', ' ', 'awesome')).toEqual('JavaScript is awesome'); // Очікуваний результат конкатенації: 'JavaScript is awesome'
    });
  });
});
