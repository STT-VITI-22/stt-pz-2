const lib = require('./lib');

describe('lib.js functions', () => {
  test('sum works', () => {
    expect(lib.sum(2, 3)).toBe(5);
    expect(lib.sum("10", "20")).toBe(30);
  });

  test('subtraction works', () => {
    expect(lib.subtraction(10, 3)).toBe(7);
    expect(lib.subtraction("20", "5")).toBe(15);
  });

  test('division works', () => {
    expect(lib.division(10, 2)).toBe(5);
    expect(() => lib.division(10, 0)).toThrow("Division by zero");
  });

  test('multiplication works', () => {
    expect(lib.multiplication(4, 5)).toBe(20);
  });

  test('percentage works', () => {
    expect(lib.percentage(200, 10)).toBe(20);
  });

  test('getWholeNumberPart works', () => {
    expect(lib.getWholeNumberPart(5.9)).toBe(5);
  });

  test('getEvenNumbers works', () => {
    expect(lib.getEvenNumbers([1,2,3,4,5,6])).toEqual([2,4,6]);
  });

  test('getMaxNumber works', () => {
    expect(lib.getMaxNumber([1,5,3,9,2])).toBe(9);
  });

  test('getMinAndMaxNumbers works', () => {
    expect(lib.getMinAndMaxNumbers([1,5,3,9,2])).toEqual({min:1, max:9});
  });

  test('arithmeticMeans works', () => {
    expect(lib.arithmeticMeans([2,4,6])).toBe(4);
    expect(lib.arithmeticMeans([])).toBe(0);
  });

  test('getVowels works', () => {
    expect(lib.getVowels("Hello World")).toEqual(["e","o","o"]);
  });

  test('cancatString works', () => {
    expect(lib.cancatString(["Hello"," ","World"])).toBe("Hello World");
  });

  test('splitString works', () => {
    expect(lib.splitString("a,b,c", ",")).toEqual(["a","b","c"]);
  });

  test('hasSubString works', () => {
    expect(lib.hasSubString("Hello World", "World")).toBe(true);
    expect(lib.hasSubString("Hello World", "Test")).toBe(false);
  });

  test('isLowerCase works', () => {
    expect(lib.isLowerCase("a")).toBe(true);
    expect(lib.isLowerCase("A")).toBe(false);
  });
});