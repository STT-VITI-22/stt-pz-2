const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return the sum of two numbers', () => {
      expect(lib.sum(5, 1)).toEqual(6);
    });

    it('should handle negative numbers', () => {
      expect(lib.sum(-5, 1)).toEqual(-4);
    });

    it('should handle zero', () => {
      expect(lib.sum(0, 10)).toEqual(10);
    });

    it('should handle string inputs', () => {
      expect(lib.sum('5', '1')).toEqual(6);
    });
  });

  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });

    it('should handle negative numbers', () => {
      expect(lib.subtraction(5, 10)).toEqual(-5);
    });

    it('should handle string inputs', () => {
      expect(lib.subtraction('10', '3')).toEqual(7);
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return the division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });

    it('should handle division by zero', () => {
      expect(() => lib.division(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should handle string inputs', () => {
      expect(lib.division('10', '2')).toEqual(5);
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return the multiplication of two numbers', () => {
      expect(lib.multiplication(5, 3)).toEqual(15);
    });

    it('should handle multiplication by zero', () => {
      expect(lib.multiplication(10, 0)).toEqual(0);
    });

    it('should handle string inputs', () => {
      expect(lib.multiplication('4', '6')).toEqual(24);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should calculate the correct percentage', () => {
      expect(lib.percentage(200, 10)).toEqual(20);
    });

    it('should handle string inputs', () => {
      expect(lib.percentage('500', '20')).toEqual(100);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return the whole part of a positive number', () => {
      expect(lib.getWholeNumberPart(12.34)).toEqual(12);
    });

    it('should return the whole part of a negative number', () => {
      expect(lib.getWholeNumberPart(-5.67)).toEqual(-5);
    });

    it('should handle string inputs', () => {
      expect(lib.getWholeNumberPart('98.76')).toEqual(98);
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return an array of even numbers', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      expect(lib.getEvenNumbers(numbers)).toEqual([2, 4, 6]);
    });

    it('should return an empty array if no even numbers are present', () => {
      const numbers = [1, 3, 5, 7];
      expect(lib.getEvenNumbers(numbers)).toEqual([]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return the maximum number from an array', () => {
      const numbers = [10, 5, 20, 15];
      expect(lib.getMaxNumber(numbers)).toEqual(20);
    });

    it('should return null for an empty array', () => {
      expect(lib.getMaxNumber([])).toBeNull();
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return an object with min and max numbers', () => {
      const numbers = [10, 5, 20, 15];
      expect(lib.getMinAndMaxNumbers(numbers)).toEqual({ min: 5, max: 20 });
    });

    it('should return null for an empty array', () => {
      expect(lib.getMinAndMaxNumbers([])).toEqual({ min: null, max: null });
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should calculate the arithmetic mean of an array of numbers', () => {
      const numbers = [10, 20, 30];
      expect(lib.arithmeticMeans(numbers)).toEqual(20);
    });

    it('should handle an empty array, returning 0', () => {
      expect(lib.arithmeticMeans([])).toEqual(0);
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return an array of vowels from a string', () => {
      const str = 'Hello World';
      expect(lib.getVowels(str)).toEqual(['e', 'o', 'o']);
    });

    it('should handle uppercase vowels', () => {
      const str = 'APPLE';
      expect(lib.getVowels(str)).toEqual(['A', 'E']);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concatenate an array of strings into one string', () => {
      const arr = ['Hello', ' ', 'World'];
      expect(lib.cancatString(arr)).toEqual('Hello World');
    });

    it('should handle an empty array', () => {
      expect(lib.cancatString([])).toEqual('');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split a string by a given divider', () => {
      const str = 'one,two,three';
      expect(lib.splitString(str, ',')).toEqual(['one', 'two', 'three']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if the string contains the substring', () => {
      expect(lib.hasSubString('hello world', 'world')).toBeTruthy();
    });

    it('should return false if the string does not contain the substring', () => {
      expect(lib.hasSubString('hello world', 'test')).toBeFalsy();
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true for a lowercase character', () => {
      expect(lib.isLowerCase('a')).toBeTruthy();
    });

    it('should return false for an uppercase character', () => {
      expect(lib.isLowerCase('B')).toBeFalsy();
    });

    it('should return true for a number', () => {
        expect(lib.isLowerCase('1')).toBeTruthy();
    });
  });
});