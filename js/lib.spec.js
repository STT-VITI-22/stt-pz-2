const lib = require('./lib');

describe('Test suite for lib.js', () => {
  // subtraction
  describe('subtraction', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toBe(4);
    });
    it('should work with string numbers', () => {
      expect(lib.subtraction("10", "3")).toBe(7);
    });
  });

  // division
  describe('division', () => {
    it('should divide two numbers', () => {
      expect(lib.division(10, 2)).toBe(5);
    });
    it('should return Infinity when dividing by 0', () => {
      expect(lib.division(5, 0)).toBe(Infinity);
    });
  });

  // multiplication
  describe('multiplication', () => {
    it('should multiply two numbers', () => {
      expect(lib.multiplication(4, 5)).toBe(20);
    });
    it('should work with string numbers', () => {
      expect(lib.multiplication("2", "3")).toBe(6);
    });
  });

  // percentage
  describe('percentage', () => {
    it('should calculate percentage', () => {
      expect(lib.percentage(200, 10)).toBe(20);
    });
    it('should work with string inputs', () => {
      expect(lib.percentage("50", "30")).toBe(15);
    });
  });

  // getWholeNumberPart
  describe('getWholeNumberPart', () => {
    it('should return whole number part', () => {
      expect(lib.getWholeNumberPart(7.89)).toBe(7);
    });
    it('should work with string input', () => {
      expect(lib.getWholeNumberPart("12.34")).toBe(12);
    });
  });

  // getEvenNumbers
  describe('getEvenNumbers', () => {
    it('should return even numbers', () => {
      expect(lib.getEvenNumbers([1,2,3,4,5,6])).toEqual([2,4,6]);
    });
    it('should return empty array if no evens', () => {
      expect(lib.getEvenNumbers([1,3,5])).toEqual([]);
    });
  });

  // getMaxNumber
  describe('getMaxNumber', () => {
    it('should return max number', () => {
      expect(lib.getMaxNumber([10,25,3,42])).toBe(42);
    });
  });

  // getMinAndMaxNumbers
  describe('getMinAndMaxNumbers', () => {
    it('should return min and max', () => {
      expect(lib.getMinAndMaxNumbers([10,25,3,42])).toEqual({ min: 3, max: 42 });
    });
  });

  // arithmeticMeans
  describe('arithmeticMeans', () => {
    it('should calculate arithmetic mean', () => {
      expect(lib.arithmeticMeans([10,20,30])).toBe(20);
    });
    it('should return 0 for empty array', () => {
      expect(lib.arithmeticMeans([])).toBe(0);
    });
  });

  // getVowels
  describe('getVowels', () => {
    it('should return vowels from string', () => {
      expect(lib.getVowels("Hello World")).toEqual(["e","o","o"]);
    });
    it('should return empty array if no vowels', () => {
      expect(lib.getVowels("rhythm")).toEqual([]);
    });
  });

  // cancatString
  describe('cancatString', () => {
    it('should concatenate array of strings', () => {
      expect(lib.cancatString(["Hello"," ","World"])).toBe("Hello World");
    });
  });

  // splitString
  describe('splitString', () => {
    it('should split string by divider', () => {
      expect(lib.splitString("a,b,c", ",")).toEqual(["a","b","c"]);
    });
  });

  // hasSubString
  describe('hasSubString', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString("JavaScript","Script")).toBe(true);
    });
    it('should return false if not contains', () => {
      expect(lib.hasSubString("JavaScript","Python")).toBe(false);
    });
  });

  // isLowerCase
  describe('isLowerCase', () => {
    it('should return true if char is lower case', () => {
      expect(lib.isLowerCase("a")).toBe(true);
    });
    it('should return false if char is upper case', () => {
      expect(lib.isLowerCase("A")).toBe(false);
    });
    it('should return false if char is not a letter', () => {
      expect(lib.isLowerCase("1")).toBe(false);
    });
  });
});

