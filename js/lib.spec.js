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
} = require('./lib');

const assert = require('assert');

describe('Test suite for testing lib.js', () => {
  
  describe('Test suite for subtraction function', () => {
    it('should return the result of subtracting two numbers', () => {
      assert.equal(subtraction(10, 5), 5);
      assert.equal(subtraction(-10, -5), -5);
      assert.equal(subtraction('15', 5), 10);
    });
  });

  describe('Test suite for division function', () => {
    it('should return the result of dividing two numbers', () => {
      assert.equal(division(10, 2), 5);
      assert.equal(division(-10, 2), -5);
      assert.equal(division('20', 5), 4);
    });

    it('should return Infinity for division by zero', () => {
      assert.equal(division(10, 0), Infinity);
    });
  });

  describe('Test suite for multiplication function', () => {
    it('should return the result of multiplying two numbers', () => {
      assert.equal(multiplication(10, 2), 20);
      assert.equal(multiplication(-10, 2), -20);
      assert.equal(multiplication('10', '2'), 20);
    });
  });

  describe('Test suite for percentage function', () => {
    it('should calculate the percentage of a value', () => {
      assert.equal(percentage(200, 10), 20);
      assert.equal(percentage('300', '50'), 150);
    });
  });

  describe('Test suite for getWholeNumberPart function', () => {
    it('should return the whole part of a number', () => {
      assert.equal(getWholeNumberPart(10.5), 10);
      assert.equal(getWholeNumberPart(-15.7), -15);
    });
  });

  describe('Test suite for getEvenNumbers function', () => {
    it('should return an array of even numbers from the input', () => {
      assert.deepEqual(getEvenNumbers([1, 2, 3, 4, 5]), [2, 4]);
      assert.deepEqual(getEvenNumbers([10, 15, 20]), [10, 20]);
    });
  });

  describe('Test suite for getMaxNumber function', () => {
    it('should return the maximum number in an array', () => {
      assert.equal(getMaxNumber([1, 2, 3, 4, 5]), 5);
      assert.equal(getMaxNumber([-10, -20, 0]), 0);
    });
  });

  describe('Test suite for getMinAndMaxNumbers function', () => {
    it('should return an object with min and max numbers from an array', () => {
      assert.deepEqual(getMinAndMaxNumbers([1, 2, 3, 4, 5]), { min: 1, max: 5 });
      assert.deepEqual(getMinAndMaxNumbers([-10, -20, 0]), { min: -20, max: 0 });
    });
  });

  describe('Test suite for arithmeticMeans function', () => {
    it('should calculate the arithmetic mean of an array of numbers', () => {
      assert.equal(arithmeticMeans([1, 2, 3, 4, 5]), 3);
      assert.equal(arithmeticMeans([10, 20, 30]), 20);
    });
  });

  describe('Test suite for getVowels function', () => {
    it('should return an array of vowels from a string', () => {
      assert.deepEqual(getVowels('hello world'), ['e', 'o', 'o']);
      assert.deepEqual(getVowels('test'), ['e']);
    });
  });

  describe('Test suite for cancatString function', () => {
    it('should concatenate an array of strings into one string', () => {
      assert.equal(cancatString(['hello', 'world']), 'helloworld');
      assert.equal(cancatString(['foo', 'bar', 'baz']), 'foobarbaz');
    });
  });

  describe('Test suite for splitString function', () => {
    it('should split a string by a given divider', () => {
      assert.deepEqual(splitString('hello-world', '-'), ['hello', 'world']);
      assert.deepEqual(splitString('foo,bar,baz', ','), ['foo', 'bar', 'baz']);
    });
  });

  describe('Test suite for hasSubString function', () => {
    it('should return true if the string contains the substring', () => {
      assert.equal(hasSubString('hello world', 'world'), true);
      assert.equal(hasSubString('test', 'nope'), false);
    });
  });

  describe('Test suite for isLowerCase function', () => {
    it('should return true if the character is in lower case', () => {
      assert.equal(isLowerCase('a'), true);
      assert.equal(isLowerCase('A'), false);
    });
  });
});

