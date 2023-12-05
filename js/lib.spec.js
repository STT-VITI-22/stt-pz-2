const librarry = require("./lib");
const {
  calculateSubtraction,
  calculateDivision,
  calculateMultiplication,
  calculatePercentage,
  getWholePart,
  filterEvenNumbers,
  findMaxNumber,
  findMinMaxNumbers,
  calculateArithmeticMean,
  extractVowels,
  concatenateStrings,
  splitString,
  containsSubstring,
  isCharLowerCase,
} = require("./lib");





describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing calculateSubtraction function", () => {
    it("should return calculateSubtraction of two numbers", () => {
      expect(librarry.calculateSubtraction(5, 1)).toEqual(4);
    });
  });
});

describe("calculateDivision", () => {
  test("should divide two numbers", () => {
    const a = 6;
    const b = 2;
    const result = calculateDivision(a, b);
    expect(result).toBe(3);
  });
  test("should handle calculateDivision by zero", () => {
    const a = 8;
    const b = 0;
    expect(() => calculateDivision(a, b)).toThrowError("Divison on zero is impossible");
  });
});

describe("calculateSubtraction", () => {
  test("should subtract two numbers", () => {
    const a = 5;
    const b = 3;
    const result = calculateSubtraction(a, b);
    expect(result).toBe(2);
  });
});

describe("calculateMultiplication", () => {
  test("should multiply two numbers", () => {
    const a = 4;
    const b = 3;
    const result = calculateMultiplication(a, b);
    expect(result).toBe(12);
  });
});

describe("getWholePart", () => {
  test("should get whole number part for numbers", () => {
    const number = 7.89;
    const result = getWholePart(number);
    expect(result).toBe(7);
  });

  test("should get whole number part for strings representing numbers", () => {
    const number = "15.75";
    const result = getWholePart(number);
    expect(result).toBe(15);
  });

  test("should throw an error for non-numeric input", () => {
    const number = "abc";
    expect(() => getWholePart(number)).toThrowError(
      "Input data must be numbers or strings representing numbers."
    );
  });
});

describe("filterEvenNumbers", () => {
  test("should get even numbers from an array of natural numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = filterEvenNumbers(numbers);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  test("should return an empty array for an empty input array", () => {
    const numbers = [];
    const result = filterEvenNumbers(numbers);
    expect(result).toEqual([]);
  });

  test("should throw an error for non-array input", () => {
    const numbers = "not an array";
    expect(() => filterEvenNumbers(numbers)).toThrowError(
      "The input data must be an array of natural numbers."
    );
  });
});

describe("calculatePercentage", () => {
  test("should calculate calculatePercentage for numbers", () => {
    const value = 200;
    const percent = 20;
    const result = calculatePercentage(value, percent);
    expect(result).toBe(40);
  });

  test("should calculate calculatePercentage for strings representing numbers", () => {
    const value = "150";
    const percent = "10";
    const result = calculatePercentage(value, percent);
    expect(result).toBe(15);
  });

  test("should throw an error for non-numeric input", () => {
    const value = "abc";
    const percent = "10";
    expect(() => calculatePercentage(value, percent)).toThrowError(
      "Input data must be numbers or strings that represent numbers."
    );
  });
});



describe("findMinMaxNumbers", () => {
  test("should get min and max numbers from an array of numbers", () => {
    const numbers = [5, 2, 9, 1, 7];
    const result = findMinMaxNumbers(numbers);
    expect(result).toEqual({ min: 1, max: 9 });
  });

  test("should throw an error for an empty input array", () => {
    // Arrange
    const numbers = [];
    expect(() => findMinMaxNumbers(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });

  test("should throw an error for non-array input", () => {
    // Arrange
    const numbers = "not an array";
    expect(() => findMinMaxNumbers(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });
});

describe("calculateArithmeticMean", () => {
  test("should calculate the arithmetic mean from an array of numbers", () => {
    const numbers = [5, 2, 9, 1, 7];
    const result = calculateArithmeticMean(numbers);
    expect(result).toBe(4.8);
  });

  test("should throw an error for an empty input array", () => {
    const numbers = [];
    expect(() => calculateArithmeticMean(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });

  test("should throw an error for non-array input", () => {
    const numbers = "not an array";
    expect(() => calculateArithmeticMean(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });
});

describe("findMaxNumber", () => {
  test("should get the maximum number from an array of numbers", () => {
    const numbers = [5, 2, 9, 1, 7];
    const result = findMaxNumber(numbers);
    expect(result).toBe(9);
  });

  test("should throw an error for an empty input array", () => {
    const numbers = [];
    expect(() => findMaxNumber(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });

  test("should throw an error for non-array input", () => {
    const numbers = "not an array";
    expect(() => findMaxNumber(numbers)).toThrowError(
      "Input data must be a non-empty array of numbers."
    );
  });
});



describe("concatenateStrings", () => {
  test("should concatenate an array of strings into one string", () => {
    const strings = ["Hello", " ", "World"];
    const result = concatenateStrings(strings);
    expect(result).toBe("Hello World");
  });

  test("should throw concatenate a and b", () => {
    const strings = ["a", "b"];
    expect(concatenateStrings(strings)).toBe("ab");
  });

  test("should throw an error for non-array input", () => {
    const strings = ["hi", " ", "man"];
    expect(concatenateStrings(strings)).toBe("hi man");
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

describe("extractVowels", () => {
  test("should return an array of vowels from a string", () => {
    const str = "Hello World";
    const result = extractVowels(str);
    expect(result).toEqual(["e", "o", "o"]);
  });

  test("should return an empty array for a string without vowels", () => {
    const str = "Rhythm";
    const result = extractVowels(str);
    expect(result).toEqual([]);
  });

  test("should throw an error for non-string input", () => {
    const str = 123;
    expect(() => extractVowels(str)).toThrowError("Input data must be a string.");
  });
});

describe("containsSubstring", () => {
  test("should return true if a string contains a substring", () => {
    const str = "Hello World";
    const subStr = "World";
    const result = containsSubstring(str, subStr);
    expect(result).toBe(true);
  });

  test("should return false if a string does not contain a substring", () => {
    const str = "Hello World";
    const subStr = "Universe";
    const result = containsSubstring(str, subStr);
    expect(result).toBe(false);
  });

  test("should throw an error for non-string input", () => {
    const str = 123;
    const subStr = "World";
    expect(() => containsSubstring(str, subStr)).toThrowError(
      "Input data must be strings."
    );
  });

  test("should throw an error if substring is not a string", () => {
    const str = "Hello World";
    const subStr = 123;
    expect(() => containsSubstring(str, subStr)).toThrowError(
      "Input data must be strings."
    );
  });
});

describe("isCharLowerCase", () => {
  test("should return true if a character is in lower case", () => {
    const char = "a";
    const result = isCharLowerCase(char);
    expect(result).toBe(true);
  });

  test("should return false if a character is not in lower case", () => {
    const char = "A";
    const result = isCharLowerCase(char);
    expect(result).toBe(false);
  });

  test("should throw an error for a non-string or multi-character input", () => {
    const char1 = 123;
    const char2 = "ab";
    expect(() => isCharLowerCase(char1)).toThrowError(
      "Input data must be a single character string."
    );
    expect(() => isCharLowerCase(char2)).toThrowError(
      "Input data must be a single character string."
    );
  });
});
