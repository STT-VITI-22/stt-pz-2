const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toBe(4);
    });

    it('should handle string inputs by converting them to numbers', () => {
      expect(lib.subtraction('10', '4')).toBe(6);
    });

    it('should handle negative results', () => {
      expect(lib.subtraction(3, 5)).toBe(-2);
    });

    it('should return correct result with floating point numbers', () => {
      expect(lib.subtraction(5.5, 2.2)).toBeCloseTo(3.3, 1);
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => lib.division(10, 0)).toThrow('Division by zero is not allowed');
    });

    it('should handle string inputs by converting them to numbers', () => {
      expect(lib.division('20', '5')).toBe(4);
    });

    it('should return correct result with floating point numbers', () => {
      expect(lib.division(5.5, 2)).toBeCloseTo(2.75, 2);
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(4, 5)).toBe(20);
    });

    it('should handle string inputs by converting them to numbers', () => {
      expect(lib.multiplication('4', '5')).toBe(20);
    });

    it('should return 0 if one of the inputs is 0', () => {
      expect(lib.multiplication(5, 0)).toBe(0);
    });

    it('should return 0 if both inputs are 0', () => {
      expect(lib.multiplication(0, 0)).toBe(0);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should calculate percentage of a value', () => {
      expect(lib.percentage(200, 50)).toBe(100);
    });

    it('should handle string inputs by converting them to numbers', () => {
      expect(lib.percentage('200', '25')).toBe(50);
    });

    it('should return 0 if percentage is 0', () => {
      expect(lib.percentage(200, 0)).toBe(0);
    });

    it('should return 0 if value is 0', () => {
      expect(lib.percentage(0, 50)).toBe(0);
    });

    it('should return the full value if percentage is 100', () => {
      expect(lib.percentage(200, 100)).toBe(200);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return the whole number part of a float', () => {
      expect(lib.getWholeNumberPart(5.8)).toBe(5);
    });

    it('should return the same number for integers', () => {
      expect(lib.getWholeNumberPart(7)).toBe(7);
    });

    it('should handle negative numbers correctly', () => {
      expect(lib.getWholeNumberPart(-5.8)).toBe(-6);
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return an array of even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });

    it('should return an empty array if no even numbers are found', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
    });

    it('should return an empty array if input array is empty', () => {
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return the maximum number from an array', () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5])).toBe(5);
    });

    it('should handle an array with a single element', () => {
      expect(lib.getMaxNumber([3])).toBe(3);
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return an object with min and max numbers', () => {
      expect(lib.getMinAndMaxNumbers([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5 });
    });

    it('should handle an array with a single element', () => {
      expect(lib.getMinAndMaxNumbers([3])).toEqual({ min: 3, max: 3 });
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should return the arithmetic mean of an array of numbers', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should return 0 if the array is empty', () => {
      expect(lib.arithmeticMeans([])).toBe(0);
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return an array of vowels from a string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
    });

    it('should return an empty array if no vowels are found', () => {
      expect(lib.getVowels('bcdfgh')).toEqual([]);
    });

    it('should return an empty array if the string is empty', () => {
      expect(lib.getVowels('')).toEqual([]);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concatenate an array of strings into one string', () => {
      expect(lib.cancatString(['hello', 'world'])).toBe('helloworld');
    });

    it('should return an empty string if the array is empty', () => {
      expect(lib.cancatString([])).toBe('');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split a string by a given divider', () => {
      expect(lib.splitString('hello-world', '-')).toEqual(['hello', 'world']);
    });

    it('should return the original string if the divider is not found', () => {
      expect(lib.splitString('hello world', '-')).toEqual(['hello world']);
    });

    it('should return an array of characters if the divider is an empty string', () => {
      expect(lib.splitString('hello', '')).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if the string contains the substring', () => {
      expect(lib.hasSubString('hello world', 'world')).toBe(true);
    });

    it('should return false if the string does not contain the substring', () => {
      expect(lib.hasSubString('hello world', 'foo')).toBe(false);
    });

    it('should return true if the substring is empty', () => {
      expect(lib.hasSubString('hello world', '')).toBe(true);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true if the character is lowercase', () => {
      expect(lib.isLowerCase('a')).toBe(true);
    });

    it('should return false if the character is uppercase', () => {
      expect(lib.isLowerCase('A')).toBe(false);
    });

    it('should return false for non-alphabetic characters', () => {
      expect(lib.isLowerCase('1')).toBe(false);
    });
  });
});