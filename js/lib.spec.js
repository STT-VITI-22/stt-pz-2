const lib = require('./lib'); // Ensure the path is correct

describe('Test suite for lib.js functions', () => {
  describe('subtraction', () => {
    it('should return the subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
    it('should handle string inputs', () => {
      expect(lib.subtraction('10', '3')).toEqual(7);
    });
  });

  describe('division', () => {
    it('should return the division of two numbers', () => {
      expect(lib.division(6, 3)).toEqual(2);
    });
    it('should throw an error for division by zero', () => {
      expect(() => lib.division(6, 0)).toThrow("Division by zero is not allowed.");
    });
  });
});
describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(lib.sum(3, 2)).toEqual(5);
  });

  it('should handle string inputs', () => {
    expect(lib.sum('4', '5')).toEqual(9);
  });
});
describe('multiplication', () => {
  it('should return the multiplication of two numbers', () => {
    expect(lib.multiplication(3, 2)).toEqual(6);
  });

  it('should handle string inputs', () => {
    expect(lib.multiplication('4', '5')).toEqual(20);
  });
});
describe('percentage', () => {
  it('should calculate the percentage of a number', () => {
    expect(lib.percentage(200, 50)).toEqual(100);
  });

  it('should handle string inputs', () => {
    expect(lib.percentage('300', '10')).toEqual(30);
  });
});
describe('getWholeNumberPart', () => {
  it('should return the whole number part of a number', () => {
    expect(lib.getWholeNumberPart(5.7)).toEqual(5);
  });

  it('should handle string inputs', () => {
    expect(lib.getWholeNumberPart('10.8')).toEqual(10);
  });
});
describe('getEvenNumbers', () => {
  it('should return an array of even numbers', () => {
    expect(lib.getEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
  });

  it('should return an empty array if no even numbers exist', () => {
    expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
  });
});
describe('getMaxNumber', () => {
  it('should return the maximum number from an array', () => {
    expect(lib.getMaxNumber([1, 5, 3, 9, 2])).toEqual(9);
  });

  it('should handle an array with negative numbers', () => {
    expect(lib.getMaxNumber([-10, -3, -5])).toEqual(-3);
  });
});
describe('getMinAndMaxNumbers', () => {
  it('should return the minimum and maximum numbers from an array', () => {
    expect(lib.getMinAndMaxNumbers([1, 5, 3, 9, 2])).toEqual({ min: 1, max: 9 });
  });

  it('should handle an array with negative numbers', () => {
    expect(lib.getMinAndMaxNumbers([-10, -3, -5])).toEqual({ min: -10, max: -3 });
  });
});
describe('arithmeticMeans', () => {
  it('should calculate the arithmetic mean of an array of numbers', () => {
    expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
  });

  it('should return 0 for an empty array', () => {
    expect(lib.arithmeticMeans([])).toEqual(0);
  });
});
describe('getVowels', () => {
  it('should return an array of vowels from a string', () => {
    expect(lib.getVowels('hello world')).toEqual(['e', 'o', 'o']);
  });

  it('should return an empty array if no vowels exist', () => {
    expect(lib.getVowels('rhythm')).toEqual([]);
  });
});

describe('cancatString', () => {
  it('should concatenate an array of strings into one string', () => {
    expect(lib.cancatString(['Hello', ' ', 'world'])).toEqual('Hello world');
  });

  it('should return an empty string for an empty array', () => {
    expect(lib.cancatString([])).toEqual('');
  });
});
describe('splitString', () => {
  it('should split a string based on a divider', () => {
    expect(lib.splitString('Hello world', ' ')).toEqual(['Hello', 'world']);
  });

  it('should return the entire string in an array if the divider is not found', () => {
    expect(lib.splitString('Hello', ',')).toEqual(['Hello']);
  });
});
describe('hasSubString', () => {
  it('should return true if the string contains the substring', () => {
    expect(lib.hasSubString('Hello world', 'world')).toEqual(true);
  });

  it('should return false if the string does not contain the substring', () => {
    expect(lib.hasSubString('Hello world', 'bye')).toEqual(false);
  });
});
describe('isLowerCase', () => {
  it('should return true for a lowercase character', () => {
    expect(lib.isLowerCase('a')).toEqual(true);
  });

  it('should return false for an uppercase character', () => {
    expect(lib.isLowerCase('A')).toEqual(false);
  });

  it('should return false for non-alphabetic characters', () => {
    expect(lib.isLowerCase('1')).toEqual(false);
  });
});






