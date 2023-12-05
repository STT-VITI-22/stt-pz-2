const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 2)).toEqual(3);
    });
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(7, 4)).toEqual(3);
    });
  });
});

describe('Test suite for testing sum function', () => {
  it('should return sum of two numbers', () => {
    expect(lib.sum(1, 2)).toEqual(3)
    expect(lib.sum(-10, 5)).toEqual(-5)
    expect(lib.sum(-10, 10)).toEqual(0)
  });
  it('should return NaN if one parameter is skipped', () => {
    expect(lib.sum(1)).toBe(NaN);
  });
  it('should convert string inputs to numbers and sum correctly', () => {
    expect(lib.sum(5, 1)).toEqual(6)
    expect(lib.sum(10, 1)).toEqual(11)
    expect(lib.sum(25, 5)).toEqual(30)
  });
});

describe('Test suite for testing division function', () => {
  it('should return division of two numbers', () => {
    expect(lib.division(4, 2)).toEqual(2);
  });
});

describe('Test suite for testing multiplication function', () => {
  it('should return multiplication of two numbers', () => {
    expect(lib.multiplication(2, 2)).toEqual(4);
  });
});

describe('Test suite for testing percentage function', () => {
  it('should return percentage of number', () => {
    expect(lib.percentage(100, 10)).toEqual(10);
  });
});

describe('Test suite for testing getWholeNumberPart function', () => {
  it('should return getWholeNumberPart of numbers', () => {
    expect(lib.getWholeNumberPart(100,6)).toEqual(100);
  });
});
describe('Test suite for testing getEvenNumberst function', () => {
  it('should return getEvenNumbers of  number', () => {
    expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2 , 4, 6]);
  });
});
describe('Test suite for testing getMaxNumber function', () => {
  it('should return getMaxNumber of array of numbers', () => {
    expect(lib.getMaxNumber([23, 22, 3])).toEqual(NaN);
  });
});

describe('Test suite for testing getMinAndMaxNumbers function', () => {
  it('should return Min And Max Numbers of array of numbers', () => {
    expect(lib.getMinAndMaxNumbers([23, 22, 3])).toEqual(NaN);
  });
});

describe('Test suite for testing arithmeticMeans function', () => {
  it('should return arithmeticMeans of array of numbers', () => {
    expect(lib.arithmeticMeans([4, 2, 3])).toEqual(0);
  });
});

describe('Test suite for testing getVowels function', () => {
  it('should return string without vowels', () => {
    expect(lib.getVowels("day")).toEqual(["a"]);
  });
});

describe('Test suite for testing cancatString function', () => {
  it('should return one string', () => {
    expect(lib.cancatString(["day", "cat"])).toEqual("daycat");
  });
});

describe('Test suite for testing splitString function', () => {
  it('should return split string according to divider', () => {
    expect(lib.splitString("day", "a")).toEqual(["d", "y"]);
  });
});

describe('Test suite for testing hasSubString function', () => {
  it('should return true if string contains substring', () => {
    expect(lib.hasSubString("day", "a")).toEqual(true);
  });
});

describe('Test suite for testing isLowerCase function', () => {
  it('should return return true if char is in lower case', () => {
    expect(lib.isLowerCase("day")).toEqual(true);
  });
});
