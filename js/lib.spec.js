const lib = require("./lib");

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing subtraction function", () => {
    it("should return subtraction of two numbers", () => {
      expect(lib.subtraction(5, 1)).toBe(4);
      expect(lib.subtraction(5, 1)).toBe(4);
    });
  });

  describe("Test suite for testing division function", () => {
    it("should return division of two numbers", () => {
      expect(lib.division(6, 2)).toBe(3);
      expect(lib.division(5, 2)).toBe(2.5);
      expect(lib.division(1000, 5)).toBe(200);
    });
    it("should return division of two numbers(1 or 2 is negative)", () => {
      expect(lib.division(-4, -2)).toBe(2);
      expect(lib.division(6, -2)).toBe(-3);
      expect(lib.division(-20, 20)).toBe(-1);
    });
    it("should return null if 1 or 2 is 0", () => {
      expect(lib.division(-4, 0)).toBe(0);
      expect(lib.division(0, -2)).toBe(0);
      expect(lib.division(0, 0)).toBe(0);
    });
  });

  describe("Test suite for testing multiplication function", () => {
    it("should return multiplication of two numbers", () => {
      expect(lib.multiplication(6, 2)).toBe(12);
      expect(lib.multiplication(5, 2)).toBe(10);
      expect(lib.multiplication(1000, 5)).toBe(5000);
    });
    it("should return multiplication of two numbers(1 or 2 is negative)", () => {
      expect(lib.multiplication(-4, -2)).toBe(8);
      expect(lib.multiplication(6, -2)).toBe(-12);
      expect(lib.multiplication(-20, 20)).toBe(-400);
    });
    it("should return null if 1 or 2 is 0", () => {
      expect(lib.multiplication(-4, 0)).toBe(0);
      expect(lib.multiplication(0, -2)).toBe(0);
      expect(lib.multiplication(0, 0)).toBe(0);
    });
  });
  describe("Test suite for getWholeNumberPart function", () => {
    it("should return the whole number part", () => {
      expect(lib.getWholeNumberPart(5.7)).toBe(5);
      expect(lib.getWholeNumberPart("5.7")).toBe(5);
    });
  });

  describe("Test suite for getEvenNumbers function", () => {
    it("should return an array of even numbers", () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
  });

  describe("Test suite for getMaxNumber function", () => {
    it("should return the maximum number from an array", () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5, 6])).toBe(6);
    });
  });

  describe("Test suite for getMinAndMaxNumbers function", () => {
    it("should return an object with min and max numbers from an array", () => {
      expect(lib.getMinAndMaxNumbers([1, 2, 3, 4, 5, 6])).toEqual({
        min: 1,
        max: 6,
      });
    });
  });

  describe("Test suite for arithmeticMeans function", () => {
    it("should return the arithmetic mean of an array", () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe("Test suite for getVowels function", () => {
    it("should return an array of vowels from a string", () => {
      expect(lib.getVowels("hello world")).toEqual(["e", "o", "o"]);
    });
  });

  describe("Test suite for cancatString function", () => {
    it("should return a concatenated string", () => {
      expect(lib.cancatString(["hello", " ", "world"])).toBe("hello world");
    });
  });

  describe("Test suite for splitString function", () => {
    it("should return an array after splitting a string by a divider", () => {
      expect(lib.splitString("hello world", " ")).toEqual(["hello", "world"]);
    });
  });

  describe("Test suite for hasSubString function", () => {
    it("should return true if the string contains the substring", () => {
      expect(lib.hasSubString("hello world", "world")).toBe(true);
      expect(lib.hasSubString("hello world", "foo")).toBe(false);
    });
  });

  describe("Test suite for isLowerCase function", () => {
    it("should return true if the character is in lower case", () => {
      expect(lib.isLowerCase("a")).toBe(true);
      expect(lib.isLowerCase("A")).toBe(false);
    });
  });
});
