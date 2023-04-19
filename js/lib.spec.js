const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
  });
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(5, "1")).toEqual(6);
    });
  });
  describe('Test suite for testing mul function', () => {
    it('should return mul of two numbers', () => {
      expect(lib.multiplication(5, "1")).toEqual(5);
    });
  });
  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(5, "1")).toEqual(5);
    });
  });
  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return get whole number of digit', () => {
      expect(lib.getWholeNumberPart(2.4)).toEqual(2);
    });
  });
  describe('Test suite for testing percentage function', () => {
    it('should return percent from digit', () => {
      expect(lib.percentage(13, 2)).toEqual(0.26);
    });
  });
  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return even number from array', () => {
      expect(lib.getEvenNumbers([5, 1, 2, 6])).toEqual([2, 6]);
    });
  });
  describe('Test suite for testing getMaxNumber function', () => {
    it('should return max number from array', () => {
      expect(lib.getMaxNumber([5, 1, 2, 0,8,8,8,9,9,-1,6])).toEqual(9);
    });
  });
  describe('Test suite for testing getMaxAndMinNumber function', () => {
    it('should return max and min number from array', () => {
      expect(lib.getMinAndMaxNumbers([5, 1, 2, 0,8,8,8,9,9,-1,6])).toEqual({max: 9, min: -1});
    });
  });
  describe('Test suite for testing arithmeticMeans function', () => {
    it('should return arithmeticMeans from array', () => {
      expect(lib.arithmeticMeans([6,4,5,2,3])).toEqual(4);
    });
  });
  describe('Test suite for testing getVowels function', () => {
    it('should return vowels from array', () => {
      expect(lib.getVowels("Around")).toEqual(["A", "o", "u"]);
    });
  });
  describe('Test suite for testing concatString function', () => {
    it('should return string from array of strings', () => {
      expect(lib.concatString("Around", "Earth")).toEqual("AroundEarth");
    });
  });
  describe('Test suite for testing splitString function', () => {
    it('should return split string from string', () => {
      expect(lib.splitString("Earth", "")).toEqual(["E", "a", "r", "t", "h"]);
    });
  });
  describe('Test suite for testing hasSubString function', () => {
    it('should return sub string from string', () => {
      expect(lib.hasSubString("Earthquake", "quake")).toEqual(true);
    });
  });
  describe('Test suite for testing isLowerCase function', () => {
    it('should return true or false', () => {
      expect(lib.isLowerCase('f')).toEqual(true);
    });
  });
});
