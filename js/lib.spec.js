const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
    it('should handle string inputs that are numbers', () => {
      expect(lib.subtraction('10', '5')).toEqual(5);
    });
    it('should throw an error for invalid inputs', () => {
      expect(() => lib.subtraction('a', 5)).toThrow('Invalid input');
    });
  });

  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 2)).toEqual(3)
      expect(lib.sum(-10, 5)).toEqual(-5)
      expect(lib.sum(-10, 10)).toEqual(0)
    });

    it('should return NaN if one parameter is skipped', () => {
      expect(lib.sum(1)).toBe(NaN);
    });


    it('should convert string inputs to numbers and sum correctly', () => {
      expect(lib.sum('5', '1')).toEqual(6)
      expect(lib.sum(10, '1')).toEqual(11)
      expect(lib.sum('25', 5)).toEqual(30)
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });
    it('should throw error for division by zero', () => {
      expect(() => lib.division(10, 0)).toThrow('Division by zero');
    });
    it('should handle string inputs that are numbers', () => {
      expect(lib.division('20', '4')).toEqual(5);
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(5, 3)).toEqual(15);
    });
    it('should handle string inputs that are numbers', () => {
      expect(lib.multiplication('6', '7')).toEqual(42);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should return percentage of a number', () => {
      expect(lib.percentage(100, 50)).toEqual(50);
    });
    it('should handle string inputs that are numbers', () => {
      expect(lib.percentage('200', '10')).toEqual(20);
    });
    it('should throw an error for invalid inputs', () => {
      expect(() => lib.percentage('a', 50)).toThrow('Invalid input');
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return whole part of a number', () => {
      expect(lib.getWholeNumberPart(123.45)).toEqual(123);
    });
    it('should handle string inputs that are numbers', () => {
      expect(lib.getWholeNumberPart('456.789')).toEqual(456);
    });
    it('should throw an error for invalid inputs', () => {
      expect(() => lib.getWholeNumberPart('abc')).toThrow('Invalid input');
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return even numbers from an array', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
    it('should return an empty array if no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
    });
    it('should throw an error for invalid inputs', () => {
      expect(() => lib.getEvenNumbers('not an array')).toThrow('Input must be an array');
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return the maximum number from the input array', () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5, 6])).toEqual(6);
      expect(lib.getMaxNumber([10, 20, 30, 40, 50])).toEqual(50);
      expect(lib.getMaxNumber([-2, -1, 0, 1, 2])).toEqual(2);
    });

    it('should return the only element if array length is 1', () => {
      expect(lib.getMaxNumber([10])).toEqual(10);
      expect(lib.getMaxNumber([-5])).toEqual(-5);
    });

    it('should throw an error for empty array', () => {
      expect(() => lib.getMaxNumber([])).toThrow('Input must be a non-empty array');
    });
    it('should throw an error for non-array inputs', () => {
      expect(() => lib.getMaxNumber('not an array')).toThrow('Invalid input');
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return the min and max numbers from the input array', () => {
      expect(lib.getMinAndMaxNumbers([5, 2, 8, 1, 9])).toEqual({ min: 1, max: 9 });
      expect(lib.getMinAndMaxNumbers([0, -10, 10, 2])).toEqual({ min: -10, max: 10 });
      expect(lib.getMinAndMaxNumbers([1])).toEqual({ min: 1, max: 1 });
      expect(lib.getMinAndMaxNumbers([-5, -2, -8, -1, -9])).toEqual({ min: -9, max: -1 });
    });
  });

  describe('arithmeticMeans function', () => {
    it('should return the correct arithmetic mean for an array of numbers', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
      expect(lib.arithmeticMeans([-1, 0, 1])).toEqual(0);
    });
    it('should return NaN if input array is empty', () => {
      expect(lib.arithmeticMeans([])).toBeNaN();
    });
    it('should throw an error for non-array inputs', () => {
      expect(() => lib.arithmeticMeans('not an array')).toThrow('Invalid input');
    });
  });

  describe('getVowels function', () => {
    it('returns all vowels in a string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
      expect(lib.getVowels('AEIOUaeiou')).toEqual(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    });
    it('returns an empty array for a string with no vowels', () => {
      expect(lib.getVowels('rhythm')).toEqual([]);
    });
    it('should throw an error for non-string input', () => {
      expect(() => lib.getVowels(123)).toThrow('Invalid input');
    });
  });

  describe('cancatString function', () => {
    it('should concatenate an array of strings', () => {
      expect(lib.cancatString(['first', 'second'])).toEqual('firstsecond');
      expect(lib.cancatString(['apple', 'banana', 'cherry'])).toEqual('applebananacherry');
    });
    it('should return an empty string for an empty array', () => {
      expect(lib.cancatString([])).toEqual('');
    });
    it('should throw an error for non-array input', () => {
      expect(() => lib.cancatString('not an array')).toThrow('Invalid input');
    });
  });

  describe('splitString function', () => {
    it('should split the string using the divider', () => {
      expect(lib.splitString('sunshine_rain', '_')).toEqual(['sunshine', 'rain']);
      expect(lib.splitString('apple&banana&cherry', '&')).toEqual(['apple', 'banana', 'cherry']);
    });
    it('should return an array with one element if no divider is found', () => {
      expect(lib.splitString('sunshine rain', '-')).toEqual(['sunshine rain']);
    });
    it('should throw an error for non-string inputs', () => {
      expect(() => lib.splitString(123, '-')).toThrow('Invalid input');
    });
    it('splits the string into individual characters if the divider is an empty string', () => {
      expect(lib.splitString('abc', '')).toEqual(['a', 'b', 'c']);
    });
    it('handles consecutive dividers correctly', () => {
      expect(lib.splitString('one--two', '-')).toEqual(['one', '', 'two']);
    });
  });

  describe('hasSubString function', () => {
    it('should return true if the string contains the substring', () => {
      expect(lib.hasSubString('starlight night', 'night')).toBe(true);
      expect(lib.hasSubString('morning', 'morning')).toBe(true);
    });
    it('should return false if the string does not contain the substring', () => {
      expect(lib.hasSubString('starlight night', 'day')).toBe(false);
    });
    it('should throw an error for non-string inputs', () => {
      expect(() => lib.hasSubString(123, 'night')).toThrow('Invalid input');
    });
    it('returns true for an empty substring', () => {
      expect(lib.hasSubString('any string', '')).toBe(true);
    });
    it('is case-sensitive', () => {
      expect(lib.hasSubString('CaseSensitive', 'casesensitive')).toBe(false);
    })
  });

  describe('isLowerCase function', () => {
    it('should return true for lowercase letters', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('z')).toBe(true);
    });
    it('should return false for uppercase letters and non-letter characters', () => {
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('1')).toBe(false);
      expect(lib.isLowerCase('*')).toBe(false);
    });
    it('should throw an error for non-single character input', () => {
      expect(() => lib.isLowerCase('ab')).toThrow('Input must be a single character');
      expect(() => lib.isLowerCase('')).toThrow('Input must be a single character');
    });
  });
});
