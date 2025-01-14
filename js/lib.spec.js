const lib = require("./lib");

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing subtraction function", () => {
    it("should return subtraction of two numbers", () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
  });

  describe("Test suite for testing division function", () => {
    it("should return division of two numbers", () => {
      expect(lib.division(6, 2)).toEqual(3);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => lib.division(6, 0)).toThrow("Cannot divide by zero");
    });
  });

  describe("Test suite for testing multiplication function", () => {
    it("should return multiplication of two numbers", () => {
      expect(lib.multiplication(2, 3)).toEqual(6);
    });
  });

  describe("Test suite for testing percentage function", () => {
    it("should return percentage of a number", () => {
      expect(lib.percentage(200, 10)).toEqual(20);
    });
  });

  describe("Test suite for testing whole number part function", () => {
    it("should return whole number part of a number", () => {
      expect(lib.getWholeNumberPart(4.7)).toEqual(4);
    });
  });

  describe("Test suite for testing getEvenNumbers function", () => {
    it("should return array of even numbers", () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });
  });

  describe("Test suite for testing getMaxNumber function", () => {
    it("should return maximum number in an array", () => {
      expect(lib.getMaxNumber([1, 5, 3, 9, 2])).toEqual(9);
    });
  });

  describe("Test suite for testing getMinAndMaxNumbers function", () => {
    it("should return min and max numbers from array", () => {
      expect(lib.getMinAndMaxNumbers([1, 5, 3, 9, 2])).toEqual({
        min: 1,
        max: 9,
      });
    });
  });

  describe("Test suite for testing arithmeticMeans function", () => {
    it("should return arithmetic mean of an array", () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4])).toEqual(2.5);
    });
  });

  describe("Test suite for testing getVowels function", () => {
    it("should return vowels from string", () => {
      expect(lib.getVowels("hello")).toEqual(["e", "o"]);
    });
  });

  describe("Test suite for testing cancatString function", () => {
    it("should return concatenated string from array", () => {
      expect(lib.cancatString(["Hello", " ", "World"])).toEqual("Hello World");
    });
  });

  describe("Test suite for testing splitString function", () => {
    it("should return array after splitting string by divider", () => {
      expect(lib.splitString("Hello-World", "-")).toEqual(["Hello", "World"]);
    });
  });

  describe("Test suite for testing hasSubString function", () => {
    it("should return true if string contains substring", () => {
      expect(lib.hasSubString("Hello World", "World")).toBe(true);
    });

    it("should return false if string does not contain substring", () => {
      expect(lib.hasSubString("Hello World", "world")).toBe(false);
    });
  });

  describe("Test suite for testing isLowerCase function", () => {
    it("should return true if character is in lowercase", () => {
      expect(lib.isLowerCase("a")).toBe(true);
    });

    it("should return false if character is not in lowercase", () => {
      expect(lib.isLowerCase("A")).toBe(false);
    });
  });
});