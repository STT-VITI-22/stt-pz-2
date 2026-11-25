const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 2)).toBe(3);
      expect(lib.sum(-10, 5)).toBe(-5);
    });

    it('should convert strings to numbers', () => {
      expect(lib.sum('5', '1')).toBe(6);
      expect(lib.sum(10, '1')).toBe(11);
    });

    it('should return NaN if parameter is skipped', () => {
      expect(lib.sum(1)).toBeNaN();
    });
  });

  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toBe(4);
      expect(lib.subtraction(1, 5)).toBe(-4);
      expect(lib.subtraction(-5, -5)).toBe(0);
    });

    it('should convert strings to numbers', () => {
      expect(lib.subtraction('10', '3')).toBe(7);
      expect(lib.subtraction(10, '3')).toBe(7);
    });

    it('should work with floating point numbers', () => {
      expect(lib.subtraction(0.3, 0.1)).toBeCloseTo(0.2);
    });

    it('should return NaN if parameter is not a number', () => {
      expect(lib.subtraction('abc', 1)).toBeNaN();
      expect(lib.subtraction(1)).toBeNaN();
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toBe(5);
      expect(lib.division(-9, 3)).toBe(-3);
      expect(lib.division(0, 5)).toBe(0);
    });

    it('should return fractional result', () => {
      expect(lib.division(1, 4)).toBe(0.25);
      expect(lib.division(1, 3)).toBeCloseTo(0.333);
    });

    it('should convert strings to numbers', () => {
      expect(lib.division('10', '4')).toBe(2.5);
    });

    it('should throw an error on division by zero', () => {
      expect(() => lib.division(5, 0)).toThrow('Division by zero');
      expect(() => lib.division(5, '0')).toThrow('Division by zero');
    });

    it('should return NaN if parameter is not a number', () => {
      expect(lib.division('abc', 2)).toBeNaN();
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(3, 4)).toBe(12);
      expect(lib.multiplication(5, 0)).toBe(0);
    });

    it('should follow sign rules', () => {
      expect(lib.multiplication(-3, 4)).toBe(-12);
      expect(lib.multiplication(-3, -4)).toBe(12);
    });

    it('should convert strings to numbers', () => {
      expect(lib.multiplication('2', '2.5')).toBe(5);
    });

    it('should return NaN if parameter is not a number', () => {
      expect(lib.multiplication('abc', 2)).toBeNaN();
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should calculate percent from number', () => {
      expect(lib.percentage(200, 10)).toBe(20);
      expect(lib.percentage(50, 50)).toBe(25);
      expect(lib.percentage(80, 100)).toBe(80);
    });

    it('should return 0 for 0 percent or 0 value', () => {
      expect(lib.percentage(100, 0)).toBe(0);
      expect(lib.percentage(0, 30)).toBe(0);
    });

    it('should work with percent greater than 100 and fractional percent', () => {
      expect(lib.percentage(10, 150)).toBe(15);
      expect(lib.percentage(200, 0.5)).toBe(1);
    });

    it('should convert strings to numbers', () => {
      expect(lib.percentage('200', '15')).toBe(30);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return whole part of positive number', () => {
      expect(lib.getWholeNumberPart(5.99)).toBe(5);
      expect(lib.getWholeNumberPart(7)).toBe(7);
    });

    it('should return whole part of negative number', () => {
      expect(lib.getWholeNumberPart(-5.99)).toBe(-5);
    });

    it('should convert string to number', () => {
      expect(lib.getWholeNumberPart('12.34')).toBe(12);
    });

    it('should return NaN if parameter is not a number', () => {
      expect(lib.getWholeNumberPart('abc')).toBeNaN();
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return array of even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('should return empty array if there are no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
      expect(lib.getEvenNumbers([])).toEqual([]);
    });

    it('should not mutate original array', () => {
      const numbers = [1, 2, 3];
      lib.getEvenNumbers(numbers);
      expect(numbers).toEqual([1, 2, 3]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return max number from array', () => {
      expect(lib.getMaxNumber([1, 5, 3])).toBe(5);
      expect(lib.getMaxNumber([-10, -2, -30])).toBe(-2);
      expect(lib.getMaxNumber([7])).toBe(7);
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.getMaxNumber([])).toThrow('Array must not be empty');
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return object with min and max numbers', () => {
      expect(lib.getMinAndMaxNumbers([3, 1, 4, 1, 5, 9, 2])).toEqual({ min: 1, max: 9 });
      expect(lib.getMinAndMaxNumbers([-5, 0, 5])).toEqual({ min: -5, max: 5 });
    });

    it('should return equal min and max for one element', () => {
      expect(lib.getMinAndMaxNumbers([42])).toEqual({ min: 42, max: 42 });
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.getMinAndMaxNumbers([])).toThrow('Array must not be empty');
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should calculate arithmetic mean', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toBe(3);
      expect(lib.arithmeticMeans([10])).toBe(10);
      expect(lib.arithmeticMeans([1, 2])).toBe(1.5);
      expect(lib.arithmeticMeans([-4, 4])).toBe(0);
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.arithmeticMeans([])).toThrow('Array must not be empty');
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return array of vowels from string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
    });

    it('should keep the case of vowels', () => {
      expect(lib.getVowels('Apple')).toEqual(['A', 'e']);
    });

    it('should find Ukrainian vowels', () => {
      expect(lib.getVowels('Київ')).toEqual(['и', 'ї']);
    });

    it('should return empty array if there are no vowels', () => {
      expect(lib.getVowels('rhythm')).toEqual([]);
      expect(lib.getVowels('')).toEqual([]);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concat array of strings into one string', () => {
      expect(lib.cancatString(['Hello', ' ', 'world'])).toBe('Hello world');
    });

    it('should return empty string for empty array', () => {
      expect(lib.cancatString([])).toBe('');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split string by divider', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(lib.splitString('one two', ' ')).toEqual(['one', 'two']);
    });

    it('should return array with whole string if divider not found', () => {
      expect(lib.splitString('abc', ',')).toEqual(['abc']);
    });

    it('should split into chars if divider is empty string', () => {
      expect(lib.splitString('abc', '')).toEqual(['a', 'b', 'c']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString('Hello world', 'world')).toBe(true);
      expect(lib.hasSubString('Hello', '')).toBe(true);
    });

    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString('Hello world', 'abc')).toBe(false);
    });

    it('should be case sensitive', () => {
      expect(lib.hasSubString('Hello world', 'World')).toBe(false);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true for lower case letter', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('я')).toBe(true);
    });

    it('should return false for upper case letter', () => {
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('Я')).toBe(false);
    });

    it('should return false for non-letter characters', () => {
      expect(lib.isLowerCase('1')).toBe(false);
      expect(lib.isLowerCase('!')).toBe(false);
    });
  });
});
