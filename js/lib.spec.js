//const lib = require('./lib');
import lib from './lib';

describe('Lib.js Functionality Tests', () => {
  
  describe('Subtraction Function Tests', () => {
    test('Subtracts two numbers correctly', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });

    test('Handles subtraction with string inputs', () => {
      expect(lib.subtraction('20', '5')).toEqual(15);
    });
  });

  describe('Addition Function Tests', () => {
    test('Correctly adds two numbers', () => {
      expect(lib.sum(1, 2)).toEqual(3);
      expect(lib.sum(-10, 5)).toEqual(-5);
      expect(lib.sum(-10, 10)).toEqual(0);
    });

    test('Returns NaN when a parameter is missing', () => {
      expect(lib.sum(1)).toBe(NaN);
    });

    test('Handles addition with string inputs', () => {
      expect(lib.sum('5', '1')).toEqual(6);
      expect(lib.sum(10, '1')).toEqual(11);
      expect(lib.sum('25', 5)).toEqual(30);
    });
  });

  describe('Division Function Tests', () => {
    test('Accurately divides two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });

    test('Returns NaN for division by zero', () => {
      expect(lib.division(10, 0)).toBe(NaN);
    });

    test('Handles division with string inputs', () => {
      expect(lib.division('20', '5')).toEqual(4);
    });
  });

  describe('Multiplication Function Tests', () => {
    test('Multiplies two numbers correctly', () => {
      expect(lib.multiplication(10, 2)).toEqual(20);
    });

    test('Handles multiplication with string inputs', () => {
      expect(lib.multiplication('20', '5')).toEqual(100);
    });
  });

  describe('Percentage Calculation Tests', () => {
    test('Accurately calculates the percentage', () => {
      expect(lib.percentage(50, 20)).toEqual(10);
    });

    test('Handles percentage calculation with string inputs', () => {
      expect(lib.percentage('40', '25')).toEqual(10);
    });

    test('Correctly handles negative inputs', () => {
      expect(lib.percentage(-50, 20)).toEqual(-10);
    });

    test('Handles zero inputs properly', () => {
      expect(lib.percentage(0, 20)).toEqual(0);
      expect(lib.percentage(50, 0)).toEqual(0);
    });
  });

  describe('Whole Number Extraction Tests', () => {
    test('Extracts whole number part accurately', () => {
      expect(lib.getWholeNumberPart(10.9)).toEqual(10);
      expect(lib.getWholeNumberPart(5.5)).toEqual(5);
      expect(lib.getWholeNumberPart(100)).toEqual(100);
    });

    test('Returns NaN for non-numeric inputs', () => {
      expect(lib.getWholeNumberPart('abc')).toBeNaN();
      expect(lib.getWholeNumberPart(undefined)).toBeNaN();
    });

    test('Handles negative numbers correctly', () => {
      expect(lib.getWholeNumberPart(-10.9)).toEqual(-11);
      expect(lib.getWholeNumberPart(-5.5)).toEqual(-6);
      expect(lib.getWholeNumberPart(-100)).toEqual(-100);
    });

    test('Handles zero input without errors', () => {
      expect(lib.getWholeNumberPart(0)).toEqual(0);
    });
  });

  describe('Even Numbers Extraction Tests', () => {
    test('Extracts even numbers from an array', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      expect(lib.getEvenNumbers([10, 20, 30, 40, 50])).toEqual([10, 20, 30, 40, 50]);
      expect(lib.getEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
    });

    test('Returns empty array for no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5, 7])).toEqual([]);
      expect(lib.getEvenNumbers([-1, 3, 5])).toEqual([]);
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe('Maximum Number Identification Tests', () => {
    test('Identifies the maximum number in an array', () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5, 6])).toEqual(6);
      expect(lib.getMaxNumber([10, 20, 30, 40, 50])).toEqual(50);
      expect(lib.getMaxNumber([-2, -1, 0, 1, 2])).toEqual(2);
    });

    test('Handles single-element arrays correctly', () => {
      expect(lib.getMaxNumber([10])).toEqual(10);
      expect(lib.getMaxNumber([-5])).toEqual(-5);
    });

    test('Returns NaN for empty arrays', () => {
      expect(lib.getMaxNumber([])).toBeNaN();
    });
  });

  describe('Min and Max Number Identification Tests', () => {
    test('Finds min and max numbers in an array', () => {
      expect(lib.getMinAndMaxNumbers([5, 2, 8, 1, 9])).toEqual({ min: 1, max: 9 });
      expect(lib.getMinAndMaxNumbers([0, -10, 10, 2])).toEqual({ min: -10, max: 10 });
      expect(lib.getMinAndMaxNumbers([1])).toEqual({ min: 1, max: 1 });
      expect(lib.getMinAndMaxNumbers([-5, -2, -8, -1, -9])).toEqual({ min: -9, max: -1 });
    });
  });

  describe('Arithmetic Mean Calculation Tests', () => {
    test('Calculates arithmetic mean for number arrays', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
      expect(lib.arithmeticMeans([10, 20, 30, 40])).toEqual(25);
      expect(lib.arithmeticMeans([-1, 0, 1])).toEqual(0);
    });

    test('Returns NaN for empty arrays', () => {
      expect(lib.arithmeticMeans([])).toBeNaN();
    });
  });

  describe('Vowel Extraction Tests', () => {
    test('Returns empty array for strings without vowels', () => {
      expect(lib.getVowels('')).toEqual([]);
      expect(lib.getVowels('rhythm')).toEqual([]);
    });

    test('Extracts vowels from strings correctly', () => {
      expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
      expect(lib.getVowels('AEIOUaeiou')).toEqual(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
      expect(lib.getVowels('He11o, w0rld!')).toEqual(['e', 'o']);
    });
  });

  describe('String Concatenation Tests', () => {
    test('Concatenates arrays of strings correctly', () => {
      expect(lib.concatString(['Hello', 'World'])).toEqual('HelloWorld');
      expect(lib.concatString(['a', 'b', 'c'])).toEqual('abc');
      expect(lib.concatString(['Lorem', 'ipsum', 'dolor', 'sit', 'amet'])).toEqual('Loremipsumdolorsitamet');
    });
  });

  describe('String Splitting Tests', () => {
    test('Splits strings using a delimiter', () => {
      expect(lib.splitString('hello world', ' ')).toEqual(['hello', 'world']);
      expect(lib.splitString('1,2,3,4', ',')).toEqual(['1', '2', '3', '4']);
      expect(lib.splitString('apple|banana|cherry', '|')).toEqual(['apple', 'banana', 'cherry']);
    });

    test('Returns array with original string if delimiter is not found', () => {
      expect(lib.splitString('hello world', '-')).toEqual(['hello world']);
      expect(lib.splitString('abcdefg', '+')).toEqual(['abcdefg']);
    });
  });

  describe('SubString Functionality Tests', () => {
    it('confirms presence of a substring within a string', () => {
      expect(lib.hasSubString('hello world', 'world')).toBeTruthy();
    });

    it('checks absence of a substring within a string', () => {
      expect(lib.hasSubString('hello world', 'foo')).toBeFalsy();
    });

    it('validates identical strings and substrings', () => {
      expect(lib.hasSubString('hello', 'hello')).toBeTruthy();
    });
});

describe('Lowercase Character Tests', () => {
    it('verifies lowercase characters', () => {
      expect(lib.isLowerCase('a')).toBeTruthy();
      expect(lib.isLowerCase('e')).toBeTruthy();
      expect(lib.isLowerCase('z')).toBeTruthy();
    });

    it('validates non-lowercase characters', () => {
      expect(lib.isLowerCase('A')).toBeFalsy();
      expect(lib.isLowerCase('E')).toBeFalsy();
      expect(lib.isLowerCase('Z')).toBeFalsy();
    });

    it('evaluates non-alphabetic characters', () => {
      expect(lib.isLowerCase('1')).toBeFalsy();
      expect(lib.isLowerCase('*')).toBeFalsy();
      expect(lib.isLowerCase(' ')).toBeFalsy();
    });
  });
});
