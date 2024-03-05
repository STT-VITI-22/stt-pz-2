const {subtraction,
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
  isLowerCase} = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('subtraction function', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtraction(5, 3)).toBe(2);
      expect(subtraction(10, -3)).toBe(13);
      expect(subtraction(-5, -3)).toBe(-2);
    });

    it('should convert strings to numbers and subtract correctly', () => {
      expect(subtraction('5', '3')).toBe(2);
      expect(subtraction('10', '-3')).toBe(13);
      expect(subtraction('-5', '-3')).toBe(-2);
    });
  });

  describe('division function', () => {
    it('should divide two numbers correctly', () => {
      expect(division(6, 3)).toBe(2);
      expect(division(10, -2)).toBe(-5);
      expect(division(-6, -3)).toBe(2);
    });

    it('should convert strings to numbers and divide correctly', () => {
      expect(division('6', '3')).toBe(2);
      expect(division('10', '-2')).toBe(-5);
      expect(division('-6', '-3')).toBe(2);
    });
  });

  describe('multiplication function', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiplication(2, 3)).toBe(6);
      expect(multiplication(10, -2)).toBe(-20);
      expect(multiplication(-6, -3)).toBe(18);
    });

    it('should convert strings to numbers and multiply correctly', () => {
      expect(multiplication('2', '3')).toBe(6);
      expect(multiplication('10', '-2')).toBe(-20);
      expect(multiplication('-6', '-3')).toBe(18);
    });
  });

  describe('percentage function', () => {
    it('should calculate percentage correctly', () => {
      expect(percentage(100, 20)).toBe(20);
      expect(percentage(50, 25)).toBe(12.5);
      expect(percentage(75, 10)).toBe(7.5);
    });

    it('should convert strings to numbers and calculate percentage correctly', () => {
      expect(percentage('100', '20')).toBe(20);
      expect(percentage('50', '25')).toBe(12.5);
      expect(percentage('75', '10')).toBe(7.5);
    });
  });

  describe('getWholeNumberPart function', () => {
    it('should return the whole part of a number correctly', () => {
      expect(getWholeNumberPart(5.7)).toBe(5);
      expect(getWholeNumberPart(-3.2)).toBe(-3);
      expect(getWholeNumberPart(10)).toBe(10);
    });

    it('should convert strings to numbers and return the whole part correctly', () => {
      expect(getWholeNumberPart('5.7')).toBe(5);
      expect(getWholeNumberPart('-3.2')).toBe(-3);
      expect(getWholeNumberPart('10')).toBe(10);
    });
  });

  describe('getEvenNumbers function', () => {
    it('should return an array of even numbers from an array of natural numbers', () => {
      expect(getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
      expect(getEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
    });
  });

  describe('getMaxNumber function', () => {
    it('should return the maximum number from an array of numbers', () => {
      expect(getMaxNumber([1, 2, 3, 4, 5])).toBe(5);
      expect(getMaxNumber([10, 15, 20, 25])).toBe(25);
    });
  });

  describe('getMinAndMaxNumbers function', () => {
    it('should return an object with min and max numbers from an array', () => {
      expect(getMinAndMaxNumbers([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5 });
      expect(getMinAndMaxNumbers([10, 15, 20, 25])).toEqual({ min: 10, max: 25 });
    });
  });

  describe('arithmeticMeans function', () => {
    it('should calculate the arithmetic mean correctly', () => {
      expect(arithmeticMeans([1, 2, 3, 4, 5])).toBe(3);
      expect(arithmeticMeans([10, 20, 30])).toBe(20);
    });
  });

  describe('getVowels function', () => {
    it('should return an array of vowels from a string', () => {
      expect(getVowels('Hello')).toEqual(['e', 'o']);
      expect(getVowels('World')).toEqual(['o']);
    });
  });

  describe('cancatString function', () => {
    it('should concatenate an array of strings into one string', () => {
      expect(cancatString(['Hello', ' ', 'World'])).toBe('Hello World');
      expect(cancatString(['This', ' ', 'is', ' ', 'a', ' ', 'test'])).toBe('This is a test');
    });
  });

  describe('splitString function', () => {
    it('should split a string according to the divider', () => {
      expect(splitString('Hello World', ' ')).toEqual(['Hello', 'World']);
      expect(splitString('This,is,a,test', ',')).toEqual(['This', 'is', 'a', 'test']);
    });
  });

  describe('hasSubString function', () => {
    it('should return true if a string contains a substring', () => {
      expect(hasSubString('Hello World', 'World')).toBe(true);
      expect(hasSubString('This is a test', 'is')).toBe(true);
    });

    it('should return false if a string does not contain a substring', () => {
      expect(hasSubString('Hello World', 'foo')).toBe(false);
      expect(hasSubString('This is a test', 'bar')).toBe(false);
    });
  });

  describe('isLowerCase function', () => {
    it('should return true if a character is lowercase', () => {
      expect(isLowerCase('a')).toBe(true);
      expect(isLowerCase('z')).toBe(true);
    });

    it('should return false if a character is not lowercase', () => {
      expect(isLowerCase('A')).toBe(false);
      expect(isLowerCase('Z')).toBe(false);
      expect(isLowerCase('1')).toBe(false);
      expect(isLowerCase(' ')).toBe(false);
    });
  });
});
