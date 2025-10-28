const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(3);
    });
    it('should return sum of two numbers', () => {
      expect(lib.sum(5, 1)).toEqual(6);
    });
    it('should return division of two numbers', () => {
      expect(lib.division(5, 1)).toEqual(5);
    });
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(5, 2)).toEqual(10);
    });
    it('calculate percent from number according to all arithmetic rules', () => {
      expect(lib.percentage(200, 10)).toEqual(20);
    });
    it('should return whole part of number', () => {
      expect(lib.getWholeNumberPart(12,75)).toEqual(12);
    });
    it('should get array of natural number and return array of even number', () => {
      expect(lib.getEvenNumbers([12,75,34,13])).toEqual([12,34]);
    });
    it('should get Max number from array', () => {
      expect(lib.getMaxNumber([12, 75, 34, 13])).toEqual(75);
    });
    it('should return object with min and  max number from array', () => {
      expect(lib.getMinAndMaxNumbers([12, 75, 34, 13]));
    });
     it('should return object with min and  max number from array', () => {
      expect(lib.arithmeticMeans([12, 75, 34, 13]));
    });
    it('should return array of vowerls form string', () => {
      expect(lib.getVowels("Hello World!"));
    });
    it('should get array of string and concat them into one string', () => {
      expect(lib.cancatString("Hello", " ", "World", "!"));
    });
    it('should split string according to divider', () => {
      expect(lib.splitString("apple,banana,orange", ","));
    });
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString("Hello World", "World"));
    });
    it('should return true if char is in lower case', () => {
      expect(lib.isLowerCase('a'));
    });
  });
});
