const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });

    it('should return zero when subtracting a number from itself', () => {
      expect(lib.subtraction(10, 10)).toEqual(0);
    });

    it('should handle negative numbers properly', () => {
      expect(lib.subtraction(-5, -3)).toEqual(-2);
    });

    it('should handle subtraction of decimal numbers', () => {
      expect(lib.subtraction(3.5, 1.5)).toEqual(2);
    });

    it('should handle subtraction of strings representing numbers', () => {
      expect(lib.subtraction('10', '5')).toEqual(5);
    });

    it('should return NaN if non-numeric values are provided', () => {
      expect(lib.subtraction('abc', 5)).toBeNaN();
    });

    // Add more test cases as needed
  });
});
