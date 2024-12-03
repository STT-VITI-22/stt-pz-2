const lib = require('./lib');

describe('Test suite for lib.js', () => {
  describe('subtraction function', () => {
    it('should correctly subtract two numbers', () => {
      expect(lib.subtraction(10, 3)).toBe(7);
      expect(lib.subtraction(5, 5)).toBe(0);
      expect(lib.subtraction(-5, -3)).toBe(-2);
    });
  });

  describe('division function', () => {
    it('should correctly divide two numbers', () => {
      expect(lib.division(10, 2)).toBe(5);
      expect(lib.division(9, 3)).toBe(3);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => lib.division(10, 0)).toThrow('Ділення на нуль неможливе');
    });
  });

  describe('multiplication function', () => {
    it('should correctly multiply two numbers', () => {
      expect(lib.multiplication(2, 3)).toBe(6);
      expect(lib.multiplication(-2, 3)).toBe(-6);
    });
  });

  describe('percentage function', () => {
    it('should calculate percentage of a number', () => {
      expect(lib.percentage(200, 10)).toBe(20);
      expect(lib.percentage(150, 20)).toBe(30);
    });
  });

  describe('getWholeNumberPart function', () => {
    it('should return the whole part of a number', () => {
      expect(lib.getWholeNumberPart(10.5)).toBe(10);
      expect(lib.getWholeNumberPart(-5.7)).toBe(-5);
    });
  });
});
