const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
    it('should return subtraction of two numbers', () => {
    expect(lib.subtraction(10, 5)).toEqual(5);
  });

    it('should work with negative numbers', () => {
    expect(lib.subtraction(-3, -7)).toEqual(4);
  });

    it('should convert numeric strings to numbers', () => {
    expect(lib.subtraction("20", "5")).toEqual(15);
  });

    it('should convert string and number mix correctly', () => {
    expect(lib.subtraction("100", 10)).toEqual(90);
  });

    it('should return NaN when input is not numeric', () => {
    expect(lib.subtraction("abc", 5)).toEqual(NaN);
  });
});

describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(5, 1)).toEqual(5);
    }); 
  });
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(2, 3)).toEqual(5);
    });

    it('should convert numeric strings to numbers', () => {
      expect(lib.sum("10", "5")).toEqual(15);
    });

    it('should work with negative numbers', () => {
      expect(lib.sum(-2, -3)).toEqual(-5);
    });
  });

  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });

    it('should convert numeric strings to numbers', () => {
      expect(lib.division("9", "3")).toEqual(3);
    });

    it('should return Infinity when dividing by zero', () => {
      expect(lib.division(5, 0)).toEqual(Infinity);
    });
  });

  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(5, 1)).toEqual(5);
    });

    it('should convert numeric strings to numbers', () => {
      expect(lib.multiplication("4", "3")).toEqual(12);
    });

    it('should work with negative numbers', () => {
      expect(lib.multiplication(-2, 3)).toEqual(-6);
    });
  });

  describe('Test suite for testing percentage function', () => {
    it('should calculate percent from number', () => {
      expect(lib.percentage(200, 10)).toEqual(20);
    });

    it('should work with string arguments', () => {
      expect(lib.percentage("50", "10")).toEqual(5);
    });
  });

  describe('Test suite for testing getWholeNumberPart function', () => {
    it('should return whole part of positive float number', () => {
      expect(lib.getWholeNumberPart(10.7)).toEqual(10);
    });

    it('should return whole part of negative float number', () => {
      expect(lib.getWholeNumberPart(-3.9)).toEqual(-3);
    });

    it('should work with string number', () => {
      expect(lib.getWholeNumberPart("7.8")).toEqual(7);
    });
  });

  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return even numbers from array', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('should return empty array if there is no even numbers', () => {
      expect(lib.getEvenNumbers([1, 3, 5])).toEqual([]);
    });

    it('should return empty array for empty input array', () => {
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe('Test suite for testing getMaxNumber function', () => {
    it('should return max number from array', () => {
      expect(lib.getMaxNumber([1, 7, 3, 10, 2])).toEqual(10);
    });
  });

  describe('Test suite for testing getMinAndMaxNumbers function', () => {
    it('should return object with min and max numbers from array', () => {
      expect(lib.getMinAndMaxNumbers([5, 1, 9, 3])).toEqual({ min: 1, max: 9 });
    });
  });

  describe('Test suite for testing arithmeticMeans function', () => {
    it('should calculate arithmetic means of numbers', () => {
      expect(lib.arithmeticMeans([2, 4, 6])).toEqual(4);
    });

    it('should work with one element array', () => {
      expect(lib.arithmeticMeans([5])).toEqual(5);
    });
  });

  describe('Test suite for testing getVowels function', () => {
    it('should return vowels from english string', () => {
      expect(lib.getVowels('Hello World')).toEqual(['e', 'o', 'o']);
    });

    it('should return vowels from ukrainian string', () => {
      expect(lib.getVowels('мама')).toEqual(['а', 'а']);
    });

    it('should return empty array if no vowels', () => {
      expect(lib.getVowels('bcdfg')).toEqual([]);
    });
  });

  describe('Test suite for testing cancatString function', () => {
    it('should concat array of strings into one string', () => {
      expect(lib.cancatString(['Hello', ' ', 'World'])).toEqual('Hello World');
    });

    it('should return empty string for empty array', () => {
      expect(lib.cancatString([])).toEqual('');
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split string by divider', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });

    it('should return array with original string if divider not found', () => {
      expect(lib.splitString('abc', ',')).toEqual(['abc']);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString('Hello world', 'world')).toEqual(true);
    });

    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString('Hello', 'test')).toEqual(false);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true if char is in lower case', () => {
      expect(lib.isLowerCase('a')).toEqual(true);
    });

    it('should return false if char is in upper case', () => {
      expect(lib.isLowerCase('A')).toEqual(false);
    });

    it('should return false for non-letter characters', () => {
      expect(lib.isLowerCase('1')).toEqual(false);
      expect(lib.isLowerCase('-')).toEqual(false);
    });
  });
  
  describe('factorial function tests', () => {
    it('should return 120 for input 5', () => {
      expect(lib.factorial(5)).toEqual(120);
    });

    it('should return 1 for input 0', () => {
      expect(lib.factorial(0)).toEqual(1);
    }); 
    it('should return 1 for input 1', () => {
      expect(lib.factorial(1)).toEqual(1);
    });
    it('should return NaN for negative input', () => {
      expect(lib.factorial(-3)).toEqual(NaN);
    });
    it('should return NaN for non-integer input', () => {
      expect(lib.factorial(4.5)).toEqual(NaN);
    });
  });

});
