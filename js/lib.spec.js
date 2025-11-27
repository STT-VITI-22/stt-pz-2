// js/lib.spec.js
const lib = require('./lib');

describe('Test suite for lib.js', () => {

  // 1. subtraction
  describe('subtraction', () => {
    it('should subtract two numbers', () => {
      expect(lib.subtraction(5, 2)).toBe(3);
      expect(lib.subtraction(0, 5)).toBe(-5);
    });
    it('should handle strings', () => {
      expect(lib.subtraction('10', '4')).toBe(6);
    });
    it('should return NaN for invalid input', () => {
      expect(lib.subtraction('abc', 5)).toBeNaN();
    });
  });

  // 2. division
  describe('division', () => {
    it('should divide numbers', () => {
      expect(lib.division(6, 2)).toBe(3);
      expect(lib.division(5, 2)).toBe(2.5);
    });
    it('should return Infinity on division by zero', () => {
      expect(lib.division(5, 0)).toBe(Infinity);
    });
    it('should handle strings', () => {
      expect(lib.division('10', '2')).toBe(5);
    });
  });

  // 3. multiplication
  describe('multiplication', () => {
    it('should multiply numbers', () => {
      expect(lib.multiplication(3, 4)).toBe(12);
      expect(lib.multiplication(-2, 3)).toBe(-6);
    });
    it('should handle strings', () => {
      expect(lib.multiplication('5', '3')).toBe(15);
    });
  });

  // 4. percentage
  describe('percentage', () => {
    it('should calculate percentage', () => {
      expect(lib.percentage(200, 25)).toBe(50);
      expect(lib.percentage(100, 10)).toBe(10);
    });
    it('should handle strings', () => {
      expect(lib.percentage('150', '20')).toBe(30);
    });
  });

  // 5. getWholeNumberPart
  describe('getWholeNumberPart', () => {
    it('should return whole part', () => {
      expect(lib.getWholeNumberPart(3.7)).toBe(3);
      expect(lib.getWholeNumberPart(-3.7)).toBe(-3);
    });
    it('should handle strings', () => {
      expect(lib.getWholeNumberPart('5.9')).toBe(5);
    });
  });

  // 6. getEvenNumbers
  describe('getEvenNumbers', () => {
    it('should return even numbers', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
      expect(lib.getEvenNumbers([-2, 0, 2])).toEqual([-2, 0, 2]);
    });
    it('should return empty array for invalid input', () => {
      expect(lib.getEvenNumbers('not array')).toEqual([]);
    });
  });

  // 7. getMaxNumber
  describe('getMaxNumber', () => {
    it('should return max number', () => {
      expect(lib.getMaxNumber([1, 5, 3])).toBe(5);
    });
    it('should return null for empty or invalid', () => {
      expect(lib.getMaxNumber([])).toBeNull();
      expect(lib.getMaxNumber([null, 'a'])).toBeNull();
    });
  });

  // 8. getMinAndMaxNumbers
  describe('getMinAndMaxNumbers', () => {
    it('should return min and max', () => {
      expect(lib.getMinAndMaxNumbers([3, 1, 4, 1, 5])).toEqual({ min: 1, max: 5 });
    });
    it('should return nulls for invalid', () => {
      expect(lib.getMinAndMaxNumbers([])).toEqual({ min: null, max: null });
    });
  });

  // 9. arithmeticMeans
  describe('arithmeticMeans', () => {
    it('should calculate mean', () => {
      expect(lib.arithmeticMeans([2, 4, 6])).toBe(4);
      expect(lib.arithmeticMeans([1, 2])).toBe(1.5);
    });
    it('should return null for invalid', () => {
      expect(lib.arithmeticMeans([])).toBeNull();
    });
  });

  // 10. getVowels
  describe('getVowels', () => {
    it('should return vowels', () => {
      expect(lib.getVowels('hello')).toEqual(['e', 'o']);
      expect(lib.getVowels('rhythm')).toEqual(['y']);
    });
    it('should handle uppercase', () => {
      expect(lib.getVowels('AeIoU ')).toEqual(['a', 'e', 'i', 'o', 'u']);
    });
  });

  // 11. cancatString
  describe('cancatString', () => {
    it('should concat strings', () => {
      expect(lib.cancatString(['hello', ' ', 'world'])).toBe('hello world');
    });
    it('should ignore non-strings', () => {
      expect(lib.cancatString(['hi', 123, null])).toBe('hi');
    });
  });

  // 12. splitString
  describe('splitString', () => {
    it('should split by divider', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
      expect(lib.splitString('hello world', ' ')).toEqual(['hello', 'world']);
    });
    it('should return empty for invalid', () => {
      expect(lib.splitString(123, ',')).toEqual([]);
    });
  });

  // 13. hasSubString
  describe('hasSubString', () => {
    it('should check substring', () => {
      expect(lib.hasSubString('hello world', 'world')).toBe(true);
      expect(lib.hasSubString('hello', 'hey')).toBe(false);
    });
    it('should return false for invalid', () => {
      expect(lib.hasSubString(123, 'a')).toBe(false);
    });
  });

  // 14. isLowerCase
  describe('isLowerCase', () => {
    it('should check lowercase', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('5')).toBe(false);
    });
    it('should return false for invalid', () => {
      expect(lib.isLowerCase('')).toBe(false);
      expect(lib.isLowerCase('ab')).toBe(false);
    });
  });

  // 15. sum (якщо є в тестах)
  describe('sum', () => {
    it('should add numbers', () => {
      expect(lib.sum(2, 3)).toBe(5);
      expect(lib.sum('5', '3')).toBe(8);
    });
  });
});