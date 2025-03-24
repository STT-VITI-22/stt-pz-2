const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
      expect(lib.subtraction(-5, 5)).toEqual(-10);
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
      expect(lib.division(10, -2)).toEqual(-5);
      expect(lib.division(10, 0)).toEqual(Infinity);
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(3, 4)).toEqual(12);
      expect(lib.multiplication(-3, 4)).toEqual(-12);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should calculate percentage from a number', () => {
      expect(lib.percentage(200, 50)).toEqual(100);
      expect(lib.percentage(100, 25)).toEqual(25);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return the whole part of a number', () => {
      expect(lib.getWholeNumberPart(4.56)).toEqual(4);
      expect(lib.getWholeNumberPart(-3.14)).toEqual(-3);
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return an array of even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return the maximum number in an array', () => {
      expect(lib.getMaxNumber([1, 2, 3, 10, 4])).toEqual(10);
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return an object with min and max numbers', () => {
      expect(lib.getMinAndMaxNumbers([1, 2, 3, 10, 4])).toEqual({ min: 1, max: 10 });
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should calculate arithmetic mean of an array', () => {
      expect(lib.arithmeticMeans([2, 4, 6])).toEqual(4);
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return an array of vowels from a string', () => {
      expect(lib.getVowels('hello')).toEqual(['e', 'o']);
      expect(lib.getVowels('xyz')).toEqual([]);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concatenate strings into one', () => {
      expect(lib.cancatString(['hello', 'world'])).toEqual('helloworld');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split a string by the divider', () => {
      expect(lib.splitString('hello-world', '-')).toEqual(['hello', 'world']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should check if a string contains a substring', () => {
      expect(lib.hasSubString('hello', 'ell')).toEqual(true);
      expect(lib.hasSubString('hello', 'world')).toEqual(false);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should check if a character is lowercase', () => {
      expect(lib.isLowerCase('a')).toEqual(true);
      expect(lib.isLowerCase('A')).toEqual(false);
    });
  });

});
