const lib = require("./lib");

describe("Test suite for testing lib.js", () => {
  describe("Test suite for testing subtraction function", () => {
    it("should return subtraction of two numbers", () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    });
    it("should handle negative numbers", () => {
      expect(lib.subtraction(5, 10)).toEqual(-5);
    });
    it("should handle string inputs", () => {
      expect(lib.subtraction("10", "3")).toEqual(7);
    });
    it("should correctly subtract a positive number from a negative number", () => {
      expect(lib.subtraction(-10, 5)).toBe(-15);
    });
    it("should handle subtraction of zero", () => {
      expect(lib.subtraction(7, 0)).toBe(7);
      expect(lib.subtraction(0, 7)).toBe(-7);
    });
    it("should correctly handle the subtraction involving Infinity", () => {
      expect(lib.subtraction(100, Infinity)).toEqual(-Infinity);
    });
    it("should correctly handle the subtraction involving -Infinity", () => {
      expect(lib.subtraction(-10, Infinity)).toEqual(-Infinity);
    });
    it("should return NaN when one of the inputs is NaN", () => {
      expect(lib.subtraction(5, NaN)).toEqual(NaN);
    });
    it("should correctly handle subtraction of Infinity from Infinity", () => {
      expect(lib.subtraction(Infinity, Infinity)).toEqual(NaN);
    });
  });

  describe("Test suite for testing division function", () => {
    it("should return the division of two numbers", () => {
      expect(lib.division(10, 2)).toEqual(5);
    });
    it("should handle division by zero", () => {
      expect(() => lib.division(10, 0)).toThrow("Cannot divide by zero");
    });
    it("should handle string inputs", () => {
      expect(lib.division("10", "2")).toEqual(5);
    });
    it("should correctly handle division of a number by Infinity", () => {
      expect(lib.division(10, Infinity)).toEqual(0);
    });
    it("should correctly handle division of Infinity by a number", () => {
      expect(lib.division(Infinity, 5)).toEqual(Infinity);
    });
    it("should correctly handle division by NaN", () => {
      expect(lib.division(10, NaN)).toEqual(NaN);
    });
    it("should correctly handle division of NaN by a number", () => {
      expect(lib.division(NaN, 5)).toEqual(NaN);
    });
    it("should correctly handle division of Infinity by Infinity", () => {
      expect(lib.division(Infinity, Infinity)).toEqual(NaN);
    });
  });

  describe("Test suite for testing multiplication function", () => {
    it("should return the multiplication of two numbers", () => {
      expect(lib.multiplication(5, 3)).toEqual(15);
    });

    it("should handle multiplication by zero", () => {
      expect(lib.multiplication(10, 0)).toEqual(0);
    });

    it("should handle string inputs", () => {
      expect(lib.multiplication("4", "6")).toEqual(24);
    });
    it("should correctly handle multiplication by Infinity", () => {
      expect(lib.multiplication(10, Infinity)).toEqual(Infinity);
    });
    it("should return NaN when one of the inputs is NaN", () => {
      expect(lib.multiplication(5, NaN)).toEqual(NaN);
    });
    it("should correctly handle multiplication of Infinity by zero", () => {
      expect(lib.multiplication(Infinity, 0)).toEqual(NaN);
    });
    it("should correctly handle multiplication of Infinity by -1", () => {
      expect(lib.multiplication(Infinity, -1)).toEqual(-Infinity);
    });
  });

  describe("Test suite for testing percentage function", () => {
    it("should calculate the correct percentage", () => {
      expect(lib.percentage(200, 10)).toEqual(20);
    });

    it("should handle string inputs", () => {
      expect(lib.percentage("500", "20")).toEqual(100);
    });
    it("should correctly handle percentage when value is Infinity", () => {
      expect(lib.percentage(Infinity, 10)).toEqual(Infinity);
    });
    it("should return NaN when one of the inputs is NaN", () => {
      expect(lib.percentage(100, NaN)).toEqual(NaN);
    });
    it("should correctly handle percentage of Infinity by 0", () => {
      expect(lib.percentage(Infinity, 0)).toEqual(NaN);
    });
  });

  describe("Test suite for testing getWholeNumberPart function", () => {
    it("should return the whole part of a positive number", () => {
      expect(lib.getWholeNumberPart(12.34)).toEqual(12);
    });

    it("should return the whole part of a negative number", () => {
      expect(lib.getWholeNumberPart(-5.67)).toEqual(-5);
    });

    it("should handle string inputs", () => {
      expect(lib.getWholeNumberPart("98.76")).toEqual(98);
    });
    it("should return NaN for NaN input", () => {
      expect(lib.getWholeNumberPart(NaN)).toEqual(NaN);
    });
  });

  describe("Test suite for testing getEvenNumbers function", () => {
    it("should return an array of even numbers", () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      expect(lib.getEvenNumbers(numbers)).toEqual([2, 4, 6]);
    });

    it("should return an empty array if no even numbers are present", () => {
      const numbers = [1, 3, 5, 7];
      expect(lib.getEvenNumbers(numbers)).toEqual([]);
    });
    it("should ignore non-numeric (NaN, Infinity) values when finding even numbers", () => {
      const numbers = [1, NaN, 2, Infinity, 4];
      expect(lib.getEvenNumbers(numbers)).toEqual([2, 4]);
    });
  });

  describe("Test suite for testing getMaxNumber function", () => {
    it("should return the maximum number from an array", () => {
      const numbers = [10, 5, 20, 15];
      expect(lib.getMaxNumber(numbers)).toEqual(20);
    });
    it("should return null for an empty array", () => {
      expect(lib.getMaxNumber([])).toBeNull();
    });
    it("should correctly handle array with Infinity", () => {
      const numbers = [10, Infinity, 5, 20];
      expect(lib.getMaxNumber(numbers)).toEqual(Infinity);
    });
    it("should return NaN if array contains NaN (Math.max behavior)", () => {
      const numbers = [10, 5, NaN, 20];
      expect(lib.getMaxNumber(numbers)).toEqual(NaN);
    });
  });

  describe("Test suite for testing getMinAndMaxNumbers function", () => {
    it("should return an object with min and max numbers", () => {
      const numbers = [10, 5, 20, 15];
      expect(lib.getMinAndMaxNumbers(numbers)).toEqual({ min: 5, max: 20 });
    });

    it("should return null for an empty array", () => {
      expect(lib.getMinAndMaxNumbers([])).toEqual({ min: null, max: null });
    });
    it("should correctly handle array with Infinity and -Infinity", () => {
      const numbers = [Infinity, -5, 10, -Infinity];
      expect(lib.getMinAndMaxNumbers(numbers)).toEqual({
        min: -Infinity,
        max: Infinity,
      });
    });
    it("should return NaN for min/max if array contains NaN (Math.min/max behavior)", () => {
      const numbers = [10, 5, NaN, 20];
      expect(lib.getMinAndMaxNumbers(numbers)).toEqual({ min: NaN, max: NaN });
    });
  });

  describe("Test suite for testing arithmeticMeans function", () => {
    it("should calculate the arithmetic mean of an array of numbers", () => {
      const numbers = [10, 20, 30];
      expect(lib.arithmeticMeans(numbers)).toEqual(20);
    });

    it("should handle an empty array, returning 0", () => {
      expect(lib.arithmeticMeans([])).toEqual(0);
    });
    it("should return NaN if array contains NaN", () => {
      const numbers = [10, 20, 30, NaN];
      expect(lib.arithmeticMeans(numbers)).toEqual(NaN);
    });
    it("should correctly handle array with Infinity (results in Infinity)", () => {
      const numbers = [10, 20, 30, Infinity];
      expect(lib.arithmeticMeans(numbers)).toEqual(Infinity);
    });
  });

  describe("Test suite for testing getVowels function", () => {
    it("should return an array of vowels from a string", () => {
      const str = "Hello World";
      expect(lib.getVowels(str)).toEqual(["e", "o", "o"]);
    });

    it("should handle uppercase vowels", () => {
      const str = "APPLE";
      expect(lib.getVowels(str)).toEqual(["A", "E"]);
    });
  });

  describe("Test suite for testing cancatString function", () => {
    it("should concatenate an array of strings into one string", () => {
      const arr = ["Hello", " ", "World"];
      expect(lib.cancatString(arr)).toEqual("Hello World");
    });

    it("should handle an empty array", () => {
      expect(lib.cancatString([])).toEqual("");
    });
  });

  describe("Test suite for testing splitString function", () => {
    it("should split a string by a given divider", () => {
      const str = "one,two,three";
      expect(lib.splitString(str, ",")).toEqual(["one", "two", "three"]);
    });
    it("should include empty strings for consecutive delimiters", () => {
      const str = "one,,three";
      expect(lib.splitString(str, ",")).toEqual(["one", "", "three"]);
    });
    it("should handle delimiters at the start or end, creating empty strings", () => {
      const str = ",one,";
      expect(lib.splitString(str, ",")).toEqual(["", "one", ""]);
    });
  });

  describe("Test suite for testing hasSubString function", () => {
    it("should return true if the string contains the substring", () => {
      expect(lib.hasSubString("hello world", "world")).toBeTruthy();
    });

    it("should return false if the string does not contain the substring", () => {
      expect(lib.hasSubString("hello world", "test")).toBeFalsy();
    });
  });

  describe("Test suite for testing isLowerCase function", () => {
    it("should return true for a lowercase character", () => {
      expect(lib.isLowerCase("a")).toBeTruthy();
    });

    it("should return false for an uppercase character", () => {
      expect(lib.isLowerCase("B")).toBeFalsy();
    });

    it("should return true for a number", () => {
      expect(lib.isLowerCase("1")).toBeTruthy();
    });
  });

 describe("Test should remove by name", () => {
  it("should delete the name of object", () => {
    const initialList = ['Apple', 'Banana', 'Cherry', 'Blueberry'];
    const nameToRemove = 'Banana';
    const expectedList = ['Apple', 'Cherry', 'Blueberry'];
    const result = lib.removeByName(initialList, nameToRemove);
    expect(result).toEqual(expectedList);
    expect(initialList).toEqual(['Apple', 'Banana', 'Cherry', 'Blueberry']); 
  });
  it("should return empty array", () => {
    const initialList = ['Cat'];
    const nameToRemove = 'Cat';
    const expectedList = [];
    const result = lib.removeByName(initialList, nameToRemove);
    expect(result).toEqual(expectedList);
  });
    it("should delete first muss object, if there are many same objects", () => {
    const initialList = ['One', 'Two', 'One', 'Three'];
    const nameToRemove = 'One';
    const expectedList = ['Two', 'One', 'Three']; 
    const result = lib.removeByName(initialList, nameToRemove);
    expect(result).toEqual(expectedList);
  });
    it("should delete name im the end of list", () => {
    const initialList = ['First', 'Middle', 'Last'];
    const nameToRemove = 'Last';
    const expectedList = ['First', 'Middle'];
    const result = lib.removeByName(initialList, nameToRemove);
    expect(result).toEqual(expectedList);
  });
  it("should return no changed array, if object is not present", () => {
    const initialList = ['Red', 'Green', 'Blue'];
    const nameToRemove = 'Yellow';
    const expectedList = ['Red', 'Green', 'Blue']; 
    const result = lib.removeByName(initialList, nameToRemove);
    expect(result).toEqual(expectedList);
    expect(initialList).toEqual(['Red', 'Green', 'Blue']);
  });
  it("should return empty array if there are no array", () => {
    const initialList = [];
    const nameToRemove = 'smth';
    const expectedList = [];
    const result = lib.removeByName(initialList, nameToRemove);
    expect(result).toEqual(expectedList);
  });
});









  describe("Test suite for testing sum function", () => {
    it("should return the sum of two numbers", () => {
      expect(lib.sum(5, 1)).toEqual(6);
    });
    it("should handle negative numbers", () => {
      expect(lib.sum(-5, 1)).toEqual(-4);
    });
    it("should handle zero", () => {
      expect(lib.sum(0, 10)).toEqual(10);
    });
    it("should handle string inputs", () => {
      expect(lib.sum("5", "1")).toEqual(6);
    });
    it("should correctly handle the addition involving Infinity", () => {
      expect(lib.sum(100, Infinity)).toEqual(Infinity);
    });
    it("should return NaN when one of the inputs is NaN", () => {
      expect(lib.sum(5, NaN)).toEqual(NaN);
    });
    it("should correctly handle the addition involving -Infinity", () => {
      expect(lib.sum(100, -Infinity)).toEqual(-Infinity);
    });
    it("should return NaN when both inputs are NaN", () => {
      expect(lib.sum(NaN, NaN)).toEqual(NaN);
    });
    it("should correctly handle the addition of Infinity and -Infinity", () => {
      expect(lib.sum(Infinity, -Infinity)).toEqual(NaN);
    });
    
  });
});
