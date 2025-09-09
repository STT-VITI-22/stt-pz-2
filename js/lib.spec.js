const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      expect(lib.sum(1, 1)).toEqual(2);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing division function', () => {
    it('should return division of two numbers', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing multiplication function', () => {
    it('should return multiplication of two numbers', () => {
      expect(lib.multiplication(10, 2)).toEqual(20);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing percentage function', () => {
    it('should return percentage of two numbers', () => {
      expect(lib.percentage(10, 100)).toEqual(10);
    });
  });
});


describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing percentage function', () => {
    it('should return percentage of two numbers', () => {
      expect(lib.getWholeNumberPart(10)).toEqual(10);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing getEvenNumbers function', () => {
    it('should return getEvenNumbers from array', () => {
      expect(lib.getEvenNumbers([2,3,4,5,6])).toEqual([2,4,6]);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing getMaxNumber function', () => {
    it('should return get Max Number from array', () => {
      expect(lib.getMaxNumber([2,3,4,5,6])).toEqual(6);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing getMinAndMaxNumbers function', () => {
  it('should return min and max number from array', () => {
    expect(lib.getMinAndMaxNumbers([2, 3, 4, 5, 6])).toEqual({ min: 2, max: 6 });
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing arithmeticMeans function', () => {
  it('should return arithmetic means from array', () => {
    expect(lib.arithmeticMeans([10,20,30])).toEqual(20);
    });
  });
});

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing arithmeticMeans function', () => {
  it('should return arithmetic means from array', () => {
    expect(lib.getVowels("Hello world")).toEqual(["e", "o", "o"]);
    });
  });
});

describe('Test suite for testing lib.js', () => {

  describe('Test suite for testing concatString function', () => {
    it('should return one string from array of strings', () => {
      expect(lib.cancatString(["Hello", " ", "world"])).toEqual("Hello world");
    });
  });

  describe('Test suite for testing splitString function', () => {
    it('should split string by divider', () => {
      expect(lib.splitString("apple,banana,orange", ",")).toEqual(["apple", "banana", "orange"]);
    });
  });

  describe('Test suite for testing hasSubString function', () => {
    it('should return true if string contains substring', () => {
      expect(lib.hasSubString("I love JS", "love")).toEqual(true);
    });

    it('should return false if string does not contain substring', () => {
      expect(lib.hasSubString("Hello", "bye")).toEqual(false);
    });
  });

  describe('Test suite for testing isLowerCase function', () => {
    it('should return true for lowercase character', () => {
      expect(lib.isLowerCase("a")).toEqual(true);
    });

    it('should return false for uppercase character', () => {
      expect(lib.isLowerCase("A")).toEqual(false);
    });

    it('should return false for non-letter character', () => {
      expect(lib.isLowerCase("1")).toEqual(false);
    });
  });

});


