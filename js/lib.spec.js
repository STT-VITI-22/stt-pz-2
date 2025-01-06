const lib = require('./lib');

describe('Test suite for lib.js', () => {

  describe('Testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(10, 5)).toEqual(5);
      expect(lib.subtraction('20', '5')).toEqual(15);
      expect(lib.subtraction(10, '3')).toEqual(7);
    });
  });

  describe('Testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(5, 5)).toEqual(10);
      expect(lib.sum('10', '5')).toEqual(15);
      expect(lib.sum(7, '3')).toEqual(10);
    });
  });

  describe('Testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
      expect(lib.division('20', '4')).toEqual(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => lib.division(10, 0)).toThrow("Division by zero is not allowed.");
    });
  });

  describe('Testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(2, 3)).toEqual(6);
      expect(lib.multiplication('4', '5')).toEqual(20);
      expect(lib.multiplication(7, '2')).toEqual(14);
    });
  });

  describe('Testing percentage function', () => {
    it('should calculate percentage correctly', () => {
      expect(lib.percentage(200, 50)).toEqual(100);
      expect(lib.percentage('100', '25')).toEqual(25);
    });
  });

  describe('Testing getWholeNumberPart function', () => {
    it('should return whole part of number', () => {
      expect(lib.getWholeNumberPart(5.6)).toEqual(5);
      expect(lib.getWholeNumberPart('10.8')).toEqual(10);
    });
  });

  describe('Testing getEvenNumbers function', () => {
    it('should return even numbers from array', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
  });

  describe('Testing getMaxNumber function', () => {
    it('should return max number from array', () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5])).toEqual(5);
    });
  });

  describe('Testing getMinAndMaxNumbers function', () => {
    it('should return object with min and max numbers', () => {
      expect(lib.getMinAndMaxNumbers([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5 });
    });
  });

  describe('Testing arithmeticMeans function', () => {
    it('should return arithmetic mean of numbers', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
    });

    it('should return 0 for empty array', () => {
      expect(lib.arithmeticMeans([])).toEqual(0);
    });
  });

  describe('Testing getVowels function', () => {
    it('should return vowels from string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
    });
  });

  describe('Testing cancatString function', () => {
    it('should concatenate strings', () => {
      expect(lib.cancatString(['hello', ' ', 'world'])).toEqual('hello world');
    });
  });

  describe('Testing splitString function', () => {
    it('should split string by divider', () => {
      expect(lib.splitString('hello world', ' ')).toEqual(['hello', 'world']);
    });
  });

  describe('Testing hasSubString function', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString('hello world', 'world')).toEqual(true);
    });

    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString('hello world', 'foo')).toEqual(false);
    });
  });

  describe('Testing isLowerCase function', () => {
    it('should return true for lowercase character', () => {
      expect(lib.isLowerCase('a')).toEqual(true);
    });

    it('should return false for uppercase character', () => {
      expect(lib.isLowerCase('A')).toEqual(false);
    });

    it('should return false for non-alphabetic character', () => {
      expect(lib.isLowerCase('1')).toEqual(false);
    });
  });
});
