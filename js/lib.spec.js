const lib = require("./lib");
const {
  subtraction,
  division,
  multiplication,
  percentage,
  getWholeNumberPart,
  getEvenNumbers,
  getMaxNumber,
  getMinAndMaxNumbers,
  arithmeticMeans,
  getVowels,
  cancatString,
  splitString,
  hasSubString,
  isLowerCase,
} = require("./lib");

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing subtraction function", () => {
    it("should return subtraction of two numbers", () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
  });
});

describe("subtraction", () => {
  test("should subtract two numbers", () => {
    const a = 5;
    const b = 3;
    const result = subtraction(a, b);
    expect(result).toBe(2);
  });
});

describe("division", () => {
  test("should divide two numbers", () => {
    const a = 6;
    const b = 2;
    const result = division(a, b);
    expect(result).toBe(3);
  });
  test("should handle division by zero", () => {
    const a = 8;
    const b = 0;
    expect(() => division(a, b)).toThrowError("Divison on zero is impossible");
  });
});

describe("multiplication", () => {
  test("should multiply two numbers", () => {
    const a = 4;
    const b = 3;
    const result = multiplication(a, b);
    expect(result).toBe(12);
  });
});

describe("percentage", () => {
  test("should calculate percentage for numbers", () => {
    const value = 200;
    const percent = 20;
    const result = percentage(value, percent);
    expect(result).toBe(40);
  });

  test("should calculate percentage for strings representing numbers", () => {
    const value = "150";
    const percent = "10";
    const result = percentage(value, percent);
    expect(result).toBe(15);
  });

  test("should throw an error for non-numeric input", () => {
    const value = "abc";
    const percent = "10";
    expect(() => percentage(value, percent)).toThrowError(
      "Input data must be numbers or strings that represent numbers."
    );
  });
});

describe("getWholeNumberPart", () => {
  test("should get whole number part for numbers", () => {
    const number = 7.89;
    const result = getWholeNumberPart(number);
    expect(result).toBe(7);
  });

  test("should get whole number part for strings representing numbers", () => {
    const number = "15.75";
    const result = getWholeNumberPart(number);
    expect(result).toBe(15);
  });

  test("should throw an error for non-numeric input", () => {
    const number = "abc";
    expect(() => getWholeNumberPart(number)).toThrowError(
      "Input data must be numbers or strings representing numbers."
    );
  });
});

describe("getEvenNumbers", () => {
  test("should get even numbers from an array of natural numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = getEvenNumbers(numbers);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  test("should return an empty array for an empty input array", () => {
    const numbers = [];
    const result = getEvenNumbers(numbers);
    expect(result).toEqual([]);
  });

  test("should throw an error for non-array input", () => {
    const numbers = "not an array";
    expect(() => getEvenNumbers(numbers)).toThrowError(
      "The input data must be an array of natural numbers."
    );
  });
});

describe("getMaxNumber", () => {
  test("should get the maximum number from an array of numbers", () => {
    const numbers = [5, 2, 9, 1, 7];
    const result = getMaxNumber(numbers);
    expect(result).toBe(9);
  });

  test("should throw an error for an empty input array", () => {
    const numbers = [];
    expect(() => getMaxNumber(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });

  test("should throw an error for non-array input", () => {
    const numbers = "not an array";
    expect(() => getMaxNumber(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });
});

describe("getMinAndMaxNumbers", () => {
  test("should get min and max numbers from an array of numbers", () => {
    const numbers = [5, 2, 9, 1, 7];
    const result = getMinAndMaxNumbers(numbers);
    expect(result).toEqual({ min: 1, max: 9 });
  });

  test("should throw an error for an empty input array", () => {
    // Arrange
    const numbers = [];
    expect(() => getMinAndMaxNumbers(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });

  test("should throw an error for non-array input", () => {
    // Arrange
    const numbers = "not an array";
    expect(() => getMinAndMaxNumbers(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });
});

describe("arithmeticMeans", () => {
  test("should calculate the arithmetic mean from an array of numbers", () => {
    const numbers = [5, 2, 9, 1, 7];
    const result = arithmeticMeans(numbers);
    expect(result).toBe(4.8);
  });

  test("should throw an error for an empty input array", () => {
    const numbers = [];
    expect(() => arithmeticMeans(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });

  test("should throw an error for non-array input", () => {
    const numbers = "not an array";
    expect(() => arithmeticMeans(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });
});

describe("getVowels", () => {
  test("should return an array of vowels from a string", () => {
    const str = "Hello World";
    const result = getVowels(str);
    expect(result).toEqual(["e", "o", "o"]);
  });

  test("should return an empty array for a string without vowels", () => {
    const str = "Rhythm";
    const result = getVowels(str);
    expect(result).toEqual([]);
  });

  test("should throw an error for non-string input", () => {
    const str = 123;
    expect(() => getVowels(str)).toThrowError("Input data must be a string.");
  });
});

describe("cancatString", () => {
  test("should concatenate an array of strings into one string", () => {
    const strings = ["Hello", " ", "World"];
    const result = cancatString(strings);
    expect(result).toBe("Hello World");
  });

  test("should throw an error for an empty input array", () => {
    const strings = [];
    expect(() => cancatString(strings)).toThrowError(
      "Input data must be a non-empty array of strings."
    );
  });

  test("should throw an error for non-array input", () => {
    const strings = "not an array";
    expect(() => cancatString(strings)).toThrowError(
      "Input data must be a non-empty array of strings."
    );
  });
});

describe("splitString", () => {
  test("should split a string according to the divider", () => {
    const str = "Hello,World";
    const divider = ",";
    const result = splitString(str, divider);
    expect(result).toEqual(["Hello", "World"]);
  });

  test("should throw an error for non-string input", () => {
    const str = 123;
    const divider = ",";
    expect(() => splitString(str, divider)).toThrowError(
      "Input data must be strings."
    );
  });

  test("should throw an error if divider is not a string", () => {
    const str = "Hello,World";
    const divider = 123;
    expect(() => splitString(str, divider)).toThrowError(
      "Input data must be strings."
    );
  });
});

describe("hasSubString", () => {
  test("should return true if a string contains a substring", () => {
    const str = "Hello World";
    const subStr = "World";
    const result = hasSubString(str, subStr);
    expect(result).toBe(true);
  });

  test("should return false if a string does not contain a substring", () => {
    const str = "Hello World";
    const subStr = "Universe";
    const result = hasSubString(str, subStr);
    expect(result).toBe(false);
  });

  test("should throw an error for non-string input", () => {
    const str = 123;
    const subStr = "World";
    expect(() => hasSubString(str, subStr)).toThrowError(
      "Input data must be strings."
    );
  });

  test("should throw an error if substring is not a string", () => {
    const str = "Hello World";
    const subStr = 123;
    expect(() => hasSubString(str, subStr)).toThrowError(
      "Input data must be strings."
    );
  });
});

describe("isLowerCase", () => {
  test("should return true if a character is in lower case", () => {
    const char = "a";
    const result = isLowerCase(char);
    expect(result).toBe(true);
  });

  test("should return false if a character is not in lower case", () => {
    const char = "A";
    const result = isLowerCase(char);
    expect(result).toBe(false);
  });

  test("should throw an error for a non-string or multi-character input", () => {
    const char1 = 123;
    const char2 = "ab";
    expect(() => isLowerCase(char1)).toThrowError(
      "Input data must be a single character string."
    );
    expect(() => isLowerCase(char2)).toThrowError(
      "Input data must be a single character string."
    );
  });
});
