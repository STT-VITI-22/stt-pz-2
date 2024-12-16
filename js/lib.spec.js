const lib = require("./lib");

describe("Test Suite for lib.js", () => {
  describe("subtraction function", () => {
    it("should return the subtraction of two numbers", () => {
      expect(lib.subtraction(5, 1)).toBe(4);
    });
  });

  describe("division function", () => {
    it("should divide two numbers correctly", () => {
      expect(lib.division(6, 2)).toBe(3);
      expect(lib.division(5, 2)).toBe(2.5);
    });

    it("should handle division when numbers are negative", () => {
      expect(lib.division(-4, -2)).toBe(2);
      expect(lib.division(6, -2)).toBe(-3);
    });

    it("should return 0 when dividing by or dividing 0", () => {
      expect(lib.division(0, -2)).toBe(0);
      expect(lib.division(-4, 0)).toBe(0);
    });
  });

  describe("multiplication function", () => {
    it("should multiply two numbers correctly", () => {
      expect(lib.multiplication(6, 2)).toBe(12);
    });

    it("should handle multiplication with negative numbers", () => {
      expect(lib.multiplication(-4, -2)).toBe(8);
      expect(lib.multiplication(6, -2)).toBe(-12);
    });

    it("should return 0 when multiplying by 0", () => {
      expect(lib.multiplication(-4, 0)).toBe(0);
    });
  });

  describe("getWholeNumberPart function", () => {
    it("should return the whole number part of a number", () => {
      expect(lib.getWholeNumberPart(5.7)).toBe(5);
      expect(lib.getWholeNumberPart("5.7")).toBe(5);
    });
  });

  describe("getEvenNumbers function", () => {
    it("should return an array of even numbers", () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
  });

  describe("getMaxNumber function", () => {
    it("should return the maximum number from an array", () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5, 6])).toBe(6);
    });
  });

  describe("getMinAndMaxNumbers function", () => {
    it("should return an object with min and max numbers", () => {
      expect(lib.getMinAndMaxNumbers([1, 2, 3, 4, 5, 6])).toEqual({
        min: 1,
        max: 6,
      });
    });
  });

  describe("arithmeticMeans function", () => {
    it("should calculate the arithmetic mean of an array", () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });

  describe("getVowels function", () => {
    it("should return all vowels from a string", () => {
      expect(lib.getVowels("hello world")).toEqual(["e", "o", "o"]);
    });
  });

  describe("cancatString function", () => {
    it("should concatenate strings", () => {
      expect(lib.cancatString(["hello", " ", "world"])).toBe("hello world");
    });
  });

  describe("splitString function", () => {
    it("should split a string by a given divider", () => {
      expect(lib.splitString("hello world", " ")).toEqual(["hello", "world"]);
    });
  });

  describe("hasSubString function", () => {
    it("should check if a string contains a substring", () => {
      expect(lib.hasSubString("hello world", "world")).toBe(true);
      expect(lib.hasSubString("hello world", "foo")).toBe(false);
    });
  });

  describe("isLowerCase function", () => {
    it("should check if a character is lowercase", () => {
      expect(lib.isLowerCase("a")).toBe(true);
      expect(lib.isLowerCase("A")).toBe(false);
    });
  });
});
