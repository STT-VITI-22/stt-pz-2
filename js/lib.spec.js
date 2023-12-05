const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });

    it('should convert string inputs to numbers and substract correctly', () => {
      expect(lib.subtraction('20', '5')).toEqual(15);
    });
  });


  describe('Test suite for testing lib.division function', () => {
    it('should divide two numbers correctly', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });

    it('should return NaN when dividing by zero', () => {
      expect(lib.division(10, 0)).toBe(NaN);
    });

    it('should convert string inputs to numbers and divide correctly', () => {
      expect(lib.division('20', '5')).toEqual(4);
    });
  });

  describe('Test suite for testing lib.multiplication function', () => {
    it('should multiply two numbers correctly', () => {
      expect(lib.multiplication(10, 2)).toEqual(20);
    });

    it('should convert string inputs to numbers and multiply correctly', () => {
      expect(lib.multiplication('20', '5')).toEqual(100);
    });
  });
  describe('Test suite for testing lib.percentage function', () => {
    it('should calculate the lib.percentage correctly', () => {
      expect(lib.percentage(50, 20)).toEqual(10);
    });

    it('should convert string inputs to numbers and calculate the lib.percentage correctly', () => {
      expect(lib.percentage('40', '25')).toEqual(10);
    });

    it('should handle negative numbers correctly', () => {
      expect(lib.percentage(-50, 20)).toEqual(-10);
    });

    it('should handle zero input correctly', () => {
      expect(lib.percentage(0, 20)).toEqual(0);
    });

    it('should handle zero lib.percentage correctly', () => {
      expect(lib.percentage(50, 0)).toEqual(0);
    });
  });

  describe('Test suite for testing lib.getWholeNumberPart function', () => {
    it('should return the whole number part correctly', () => {
      expect(lib.getWholeNumberPart(10.9)).toEqual(10);
      expect(lib.getWholeNumberPart(5.5)).toEqual(5);
      expect(lib.getWholeNumberPart(100)).toEqual(100);
    });

    it('should return NaN for non-numeric inputs', () => {
      expect(lib.getWholeNumberPart('abc')).toBeNaN();
      expect(lib.getWholeNumberPart(undefined)).toBeNaN();
    });

    it('should handle negative numbers correctly', () => {
      expect(lib.getWholeNumberPart(-10.9)).toEqual(-11);
      expect(lib.getWholeNumberPart(-5.5)).toEqual(-6);
      expect(lib.getWholeNumberPart(-100)).toEqual(-100);
    });

    it('should handle zero input correctly', () => {
      expect(lib.getWholeNumberPart(0)).toEqual(0);
    });
  });

  describe('Test suite for testing lib.getEvenNumbers function', () => {
    it('should return only even numbers from the input array', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      expect(lib.getEvenNumbers([10, 20, 30, 40, 50])).toEqual([10, 20, 30, 40, 50]);
      expect(lib.getEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
    });

    it('should return an empty array if no even numbers are found', () => {
      expect(lib.getEvenNumbers([1, 3, 5, 7])).toEqual([]);
      expect(lib.getEvenNumbers([-1, 3, 5])).toEqual([]);
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe("getMaxNumber", () => {
    test("should get the maximum number from an array of numbers", () => {
      const numbers = [5, 2, 9, 1, 7];
      const result = lib.getMaxNumber(numbers);
      expect(result).toBe(9);
    });
  
    test("should throw an error for an empty input array", () => {
      const numbers = [];
      expect(() => lib.getMaxNumber(numbers)).toThrowError(
        "Input data must be a non-empty array of numbers."
      );
    });
  
    test("should throw an error for non-array input", () => {
      const numbers = "not an array";
      expect(() => lib.getMaxNumber(numbers)).toThrowError(
        "Input data must be a non-empty array of numbers."
      );
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

  describe('Test suite for testing lib.arithmeticMeans function', () => {
    it('should return the correct arithmetic mean for an array of numbers', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
      expect(lib.arithmeticMeans([10, 20, 30, 40])).toEqual(25);
      expect(lib.arithmeticMeans([-1, 0, 1])).toEqual(0);
    });

    it('should return NaN if input array is empty', () => {
      expect(lib.arithmeticMeans([])).toBeNaN();
    });
  });

  describe('Test suite for testing lib.getVowels function', () => {
    it('returns an empty array for an empty string', () => {
      expect(lib.getVowels('')).toEqual([]);
    });

    it('returns an empty array when there are no vowels in the string', () => {
      expect(lib.getVowels('rhythm')).toEqual([]);
    });

    it('returns an array containing only the vowels in the string', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
    });

    it('returns an array containing uppercase and lowercase vowels', () => {
      expect(lib.getVowels('AEIOUaeiou')).toEqual(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    });

    it('ignores non-alphabetic characters', () => {
      expect(lib.getVowels('He11o, w0rld!')).toEqual(['e', 'o']);
    });
  });

  describe('Test suite for lib.cancatString function', () => {
    it('should concatenate an array of strings', () => {
      expect(lib.cancatString(['Hello', 'World'])).toEqual('HelloWorld');
      expect(lib.cancatString(['a', 'b', 'c'])).toEqual('abc');
      expect(lib.cancatString(['Lorem', 'ipsum', 'dolor', 'sit', 'amet'])).toEqual('Loremipsumdolorsitamet');
    });
  });

  describe('Test suite for lib.splitString function', () => {
    it('should split the string using the divider', () => {
      expect(lib.splitString('hello world', ' ')).toEqual(['hello', 'world']);
      expect(lib.splitString('1,2,3,4', ',')).toEqual(['1', '2', '3', '4']);
      expect(lib.splitString('apple|banana|cherry', '|')).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should return an array with one element if no divider is found', () => {
      expect(lib.splitString('hello world', '-')).toEqual(['hello world']);
      expect(lib.splitString('abcdefg', '+')).toEqual(['abcdefg']);
    });
  });

  describe('Test suite for lib.hasSubString function', () => {
    it('should return true if the string contains the substring', () => {
      expect(lib.hasSubString('hello world', 'world')).toBe(true);
    });

    it('should return false if the string does not contain the substring', () => {
      expect(lib.hasSubString('hello world', 'foo')).toBe(false);
    });

    it('should return true if the string and substring are identical', () => {
      expect(lib.hasSubString('hello', 'hello')).toBe(true);
    });
  });

  describe('Test suite for lib.isLowerCase function', () => {
    it('should return true for lowercase letters', () => {
      expect(lib.isLowerCase('f')).toBe(true);
      expect(lib.isLowerCase('x')).toBe(true);
      expect(lib.isLowerCase('d')).toBe(true);
      expect(lib.isLowerCase('f')).toBe(true);
    });

    it('should return false for uppercase letters', () => {
      expect(lib.isLowerCase('F')).toBe(false);
      expect(lib.isLowerCase('R')).toBe(false);
      expect(lib.isLowerCase('G')).toBe(false);
      expect(lib.isLowerCase('K')).toBe(false);
      expect(lib.isLowerCase('L')).toBe(false);
    });

    it('should return false for non-alphabetic characters', () => {
      expect(lib.isLowerCase('1')).toBe(false);
      expect(lib.isLowerCase('*')).toBe(false);
      expect(lib.isLowerCase(' ')).toBe(false);
    });
  });
});