const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
  });
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(5, 1)).toEqual(6);
    });
  });
  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });
  });
  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(10, 2)).toEqual(20);
    });
  });
  describe('Test suite for testing percentage function', () => {
    it('should return percentage of two numbers', () => {
      expect(lib.percentage(70, 10)).toEqual(7);
    });
  });
  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return getWholeNumberPart of  number', () => {
      expect(lib.getWholeNumberPart(256.345)).toEqual(256);
    });
  });
  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return getEvenNumbers of  array', () => {
      expect(lib.getEvenNumbers([11,1001,10,21,200])).toEqual([10,200]);
    });
  });
  describe('Test suite for testing getMaxNumber function', () => {
    it('should return getMaxNumber of  number', () => {
      expect(lib.getMaxNumber([11,1001,10,21,200])).toEqual(1001);
    });
  });
  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return getMinAndMaxNumbers of  array', () => {
      expect(lib.getMinAndMaxNumbers([11,1001,10,21,200])).toEqual([1001,10]);
    });
  });
  describe('Test suite for testing arithmeticMeans function', () => {
    it('should return arithmeticMeans of  array', () => {
      expect(lib.arithmeticMeans([11,1001,10,21,200])).toEqual(248.6);
    });
  });
  describe('Test suite for testing getVowels function', () => {
    it('should return getVowels string', () => {
      expect(lib.getVowels('aaasdfmpOrmfxlIcvm')).toEqual('aaaOI');
    });
  });
  describe('Test suite for testing cancatString function', () => {
    it('should return cancatString of  string', () => {
      expect(lib.cancatString('Chepras',' ','super',' ','ITishnik')).toEqual('Chepras super ITishnik');
    });
  });
  describe('Test suite for testing splitString function', () => {
    it('should return splitString of  array', () => {
      expect(lib.splitString('Chepras/super/ITishnik','/')).toEqual(['Chepras','super','ITishnik']);
    });
  });
  describe('Test suite for testing hasSubString function', () => {
    it('should return hasSubString of  Boolean', () => {
      expect(lib.hasSubString('Chepras superITishnik','superITishnik')).toEqual(true);
    });
  });
  describe('Test suite for testing isLowerCase function', () => {
    it('should return isLowerCase of  string', () => {
      // expect(lib.isLowerCase('Mouse')).toEqual(false);
      expect(lib.isLowerCase('mouse')).toEqual(true);
    });
  });
});
