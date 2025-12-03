const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('subtraction ', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
    it('ділити ', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });

    it('множення ', () => {

      expect(lib.multiplication(10, 4)).toEqual(40);
    });
    it('процент', () => {

      expect(lib.percentage(200, 10)).toEqual(20);
    });
    it('getWholeNumberPart ', () => {
      expect(lib.getWholeNumberPart(4.7)).toEqual(4);
    });
    it('getEvenNumbers ', () => {

      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('getMaxNumber ', () => {
      expect(lib.getMaxNumber([1, 5, 3, 9, 2])).toEqual(9);
    });
    it('getMinAndMaxNumbers ', () => {
      expect(lib.getMinAndMaxNumbers([1, 5, 3, 9, 2])).toEqual({ min: 1, max: 9 });
    });
    it('arithmeticMeans ', () => {
      expect(lib.arithmeticMeans([2, 4, 6, 8])).toEqual(5);
    });
    it('getVowels ', () => {
      expect(lib.getVowels('Hello World')).toEqual(['e', 'o', 'o']);
    });
    it('cancatString ', () => {
       console.log(lib.cancatString(['Hello', ' ', 'World']));
      
      expect(lib.cancatString(['Hello', ' ', 'World'])).toEqual('Hello World');
    });
    it('splitString ', () => {
      expect(lib.splitString('Hello World', ' ')).toEqual(['Hello', 'World']);
    });
    it('hasSubString ', () => {
      expect(lib.hasSubString('Hello World', 'World')).toEqual(true);
    });
    it('isLowerCase ', () => {
      expect(lib.isLowerCase('a')).toEqual(true);
    });

  });
    describe('Test for fibonacci', () => {
    it('fibonacci of 7 should be 13', () => {
      expect(lib.fibonacci(7)).toEqual(13);
    });
    it('fibonacci of 0 should be 0', () => {
      expect(lib.fibonacci(0)).toEqual(0);
    });   
    it('fibonacci of 1 should be 1', () => {
      expect(lib.fibonacci(1)).toEqual(1);
    });
    it('fibonacci of 10 should be 55', () => {
      expect(lib.fibonacci(10)).toEqual(55);
    });
  });

});
