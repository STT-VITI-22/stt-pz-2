const lib = require("./lib.js");

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('Should subtract positive numbers', () => {
      expect(lib.subtraction(5, 1)).toEqual(4);
    })
    it('Should subtract negative numbers', () => {
      expect(lib.subtraction(-3, -3)).toEqual(0);
    })
    it('Should throw error in case of invalid input', () => {
      expect(() => lib.subtraction("Invalid", "Input")).toThrow(new Error("Given numbers must be valid"))
    })
  })

  describe("Test suite for testing division function", () => {
    it("Should divide two numbers", () => {
      expect(lib.division(10, 2)).toEqual(5)
    })

    it("Should divide two float numbers", () => {
      expect(lib.division(6.6, 2)).toEqual(3.3)
    })

    it("Should raise error cause division by zero", () => {
      expect(() => lib.division(10, 0)).toThrow(new Error("It's impossible to divide by zero"))
    })

    it('Should throw error in case of invalid input', () => {
      expect(() => lib.division("Invalid", "Input")).toThrow(new Error("Given numbers must be valid"))
    })
  })

  describe("Test suite for testing multiplication function", () => {
    it("Should multiply two numbers", () => {
      expect(lib.multiplication(10, 2)).toEqual(20)
    })

    it("Should multiply two float numbers", () => {
      expect(lib.multiplication(6.6, 2)).toEqual(13.2)
    })

    it('Should throw error in case of invalid input', () => {
      expect(() => lib.multiplication("Invalid", "Input")).toThrow(new Error("Given numbers must be valid"))
    })
  })

  describe("Test suite for testing percentage function", () => {
    it("Should return valid percentage", () => {
      expect(lib.percentage(100, 2)).toEqual(2)
    })

    it("Should return valid percentage in case of negative number", () => {
      expect(lib.percentage(100, -2)).toEqual(-2)
    })

    it('Should throw error in case of zero', () => {
      expect(() => lib.percentage(100, 0)).toThrow(new Error("Given percent can not be zero"))
    })

    it('Should throw error in case of invalid input', () => {
      expect(() => lib.percentage("Invalid", "Input")).toThrow(new Error("Given numbers must be valid"))
    })
  })

  describe("Test suite to get whole part of number", () => {
    it("Should return whole part", () => {
      expect(lib.getWholeNumberPart(10.5)).toEqual(10)
    })

    it("Should works with integer", () => {
      expect(lib.getWholeNumberPart(2)).toEqual(2)
    })

    it('Should throw error in case of invalid input', () => {
      expect(() => lib.getWholeNumberPart("Invalid")).toThrow(new Error("Given number must be valid"))
    })
  })

  describe("Test suite to get even numbers from array", () => {
    const numbers = [-2, -1, 0, 1, 1.5, 2, 3, 4]

    it("Should return only even numbers", () => {
      expect(lib.getEvenNumbers(numbers)).toEqual([-2, 0, 2, 4])
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.getEvenNumbers("string")).toThrow(new Error("Input must be an array"))
    })

    const invalidNumbersWithString = [-2, 1, 0, "string"]
    const invalidNumbersWithObject = [-2, 1, 0, {"key": "value"}]
    const invalidNumbersWithArray = [-2, 1, 0, [1, 2]]
    it("Should throw error in case of invalid numbers in array", () => {
      expect(() => lib.getEvenNumbers(invalidNumbersWithString)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.getEvenNumbers(invalidNumbersWithObject)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.getEvenNumbers(invalidNumbersWithArray)).toThrow(new Error("All elements in the array must be numbers"))
    })
  })

  describe("Test suite to get max number from array", () => {
    const numbers = [-2, -1, 0, 1, 1.5, 2, 3, 4]

    it("Should return max number numbers", () => {
      expect(lib.getMaxNumber(numbers)).toEqual(4)
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.getMaxNumber("string")).toThrow(new Error("Input must be an array"))
    })

    const invalidNumbersWithString = [-2, 1, 0, "string"]
    const invalidNumbersWithObject = [-2, 1, 0, {"key": "value"}]
    const invalidNumbersWithArray = [-2, 1, 0, [1, 2]]
    it("Should throw error in case of invalid numbers in array", () => {
      expect(() => lib.getMaxNumber(invalidNumbersWithString)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.getMaxNumber(invalidNumbersWithObject)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.getMaxNumber(invalidNumbersWithArray)).toThrow(new Error("All elements in the array must be numbers"))
    })
  })

  describe("Test suite to get max number and min from array", () => {
    const numbers = [-2, -1, 0, 1, 1.5, 2, 3, 4]
    const expectations = {
      "max": 4,
      "min": -2
    }

    it("Should return max and min numbers", () => {
      expect(lib.getMinAndMaxNumbers(numbers)).toEqual(expectations)
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.getMinAndMaxNumbers("string")).toThrow(new Error("Input must be an array"))
    })

    const invalidNumbersWithString = [-2, 1, 0, "string"]
    const invalidNumbersWithObject = [-2, 1, 0, {"key": "value"}]
    const invalidNumbersWithArray = [-2, 1, 0, [1, 2]]
    it("Should throw error in case of invalid numbers in array", () => {
      expect(() => lib.getMinAndMaxNumbers(invalidNumbersWithString)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.getMinAndMaxNumbers(invalidNumbersWithObject)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.getMinAndMaxNumbers(invalidNumbersWithArray)).toThrow(new Error("All elements in the array must be numbers"))
    })
  })

  describe("Test suite to arithmetic means from array", () => {
    const numbers = [1, 2, 3, 4, 5]

    it("Should return arithmetic means numbers", () => {
      expect(lib.arithmeticMeans(numbers)).toEqual(3)
    })

    const floatNumbers = [1.1, 2.2, 3.3]

    it("Should works proper with float numbers", () => {
      expect(lib.arithmeticMeans(floatNumbers)).toEqual(2.2)
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.arithmeticMeans("string")).toThrow(new Error("Input must be an array"))
    })

    const invalidNumbersWithString = [-2, 1, 0, "string"]
    const invalidNumbersWithObject = [-2, 1, 0, {"key": "value"}]
    const invalidNumbersWithArray = [-2, 1, 0, [1, 2]]
    it("Should throw error in case of invalid numbers in array", () => {
      expect(() => lib.arithmeticMeans(invalidNumbersWithString)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.arithmeticMeans(invalidNumbersWithObject)).toThrow(new Error("All elements in the array must be numbers"))
      expect(() => lib.arithmeticMeans(invalidNumbersWithArray)).toThrow(new Error("All elements in the array must be numbers"))
    })
  })

  describe("Test suite for getting vowels from array", () => {
    it("Should return vowels", () => {
      expect(lib.getVowels("hello world")).toEqual(["e", "o", "o"])
    })

    it("Should works with different cases", () => {
      expect(lib.getVowels("hello wOrld")).toEqual(["e", "o", "O"])
    })

    it("Should return an empty array", () => {
      expect(lib.getVowels("hll wrld")).toEqual([])
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.getVowels(1)).toThrow(new Error("Input must be a string"))
      expect(() => lib.getVowels(["h", "e", "l", "l", "o"])).toThrow(new Error("Input must be a string"))
      expect(() => lib.getVowels({})).toThrow(new Error("Input must be a string"))
    })
  })

  describe("Test suite for string concatenation", () => {
    const str = ["Hello", " ", "World", "!"]

    it("Should concat strings", () => {
      expect(lib.concatString(str)).toEqual("Hello World!")
    })

    it("Should works with and empty array", () => {
      expect(lib.concatString([])).toEqual("")
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.concatString("string")).toThrow(new Error("Input must be an array"))
      expect(() => lib.concatString([1, 2, 3, 4])).toThrow(new Error("All elements in the array must be strings"))
      expect(() => lib.concatString({})).toThrow(new Error("Input must be an array"))
    })
  })

  describe("Test suite for string splitting", () => {
    it("Should split string", () => {
      expect(lib.splitString("Hello World", " ")).toEqual(["Hello", "World"])
      expect(lib.splitString("Hello World", "l")).toEqual(["He", "", "o Wor", "d"])
    })

    it("Should works without found divider", () => {
      expect(lib.splitString("Hello", "q")).toEqual(["Hello"])
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.splitString("string", 1)).toThrow(new Error("The inputs must be string"))
      expect(() => lib.splitString(1, "string")).toThrow(new Error("The inputs must be string"))
    })
  })

  describe("Test suite for substring containing", () => {
    it("Should fiund substring", () => {
      expect(lib.hasSubString("Hello World", "Hello")).toEqual(true)
      expect(lib.hasSubString("Hello World", "World")).toEqual(true)
      expect(lib.hasSubString("Hello World", " ")).toEqual(true)
    })

    it("Should not fiund substring", () => {
      expect(lib.hasSubString("Hello World", "q")).toEqual(false)
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.hasSubString("string", 1)).toThrow(new Error("The inputs must be string"))
      expect(() => lib.hasSubString(1, "string")).toThrow(new Error("The inputs must be string"))
    })
  })

  describe("Test suite for lowering case function", () => {
    it("Should find lower case", () => {
      expect(lib.isLowerCase("a")).toEqual(true)
      expect(lib.isLowerCase("q")).toEqual(true)
    })

    it("Should not found substring", () => {
      expect(lib.isLowerCase("H")).toEqual(false)
      expect(lib.isLowerCase("!")).toEqual(false)
    })

    it("Should throw error in case of invalid input", () => {
      expect(() => lib.isLowerCase("not char")).toThrow(new Error("Input must be a single character string"))
      expect(() => lib.isLowerCase(1)).toThrow(new Error("Input must be a single character string"))
      expect(() => lib.isLowerCase(["asd", "asd"])).toThrow(new Error("Input must be a single character string"))
    })
  })
})


