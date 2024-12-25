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
    hasSubString,
    isLowerCase,
    splitString
} = require('./lib');

describe('Test suite for testing lib.js', () => {
    describe('subtraction function', () => {
        it('should return the subtraction result of two numbers', () => {
            expect(subtraction(10, 5)).toBe(5);
            expect(subtraction(20, 15)).toBe(5);
            expect(subtraction(-5, 3)).toBe(-8);
        });

        it('should handle subtraction with negative numbers', () => {
            expect(subtraction(-5, -3)).toBe(-2);
            expect(subtraction(-10, 5)).toBe(-15);
        });

        it('should return NaN if one of the parameters is missing', () => {
            expect(subtraction(5)).toBeNaN();
        });

        it('should convert string inputs to numbers', () => {
            expect(subtraction('10', '5')).toBe(5);
            expect(subtraction('20', 10)).toBe(10);
            expect(subtraction(5, '2')).toBe(3);
        });

        it('should return NaN if one parameter cannot be converted to a number', () => {
            expect(subtraction('hello', 5)).toBeNaN();
            expect(subtraction('5', 'world')).toBeNaN();
        });
    });

    describe('division function', () => {
        it('should return the division result of two numbers', () => {
            expect(division(10, 5)).toBe(2);
            expect(division(20, 4)).toBe(5);
            expect(division(7, 2)).toBe(3.5);
        });

        it('should handle division with negative numbers', () => {
            expect(division(-10, 5)).toBe(-2);
            expect(division(10, -5)).toBe(-2);
            expect(division(-10, -5)).toBe(2);
        });

        it('should return NaN if one of the parameters is missing', () => {
            expect(division(10)).toBeNaN();
        });

        it('should convert string inputs to numbers', () => {
            expect(division('20', '4')).toBe(5);
            expect(division('100', 10)).toBe(10);
            expect(division(30, '5')).toBe(6);
        });

        it('should return NaN if one parameter cannot be converted to a number', () => {
            expect(division('hello', 5)).toBeNaN();
            expect(division('20', 'world')).toBeNaN();
        });

        it('should handle division by zero', () => {
            expect(division(10, 0)).toBe('Cannot divide by zero');
            expect(division(0, 0)).toBe('Cannot divide by zero');
        });
    });

    describe('multiplication function', () => {
        it('should return the multiplication result of two numbers', () => {
            expect(multiplication(2, 5)).toBe(10);
            expect(multiplication(4, 3)).toBe(12);
            expect(multiplication(7, 6)).toBe(42);
        });

        it('should handle multiplication with negative numbers', () => {
            expect(multiplication(-2, 5)).toBe(-10);
            expect(multiplication(4, -3)).toBe(-12);
            expect(multiplication(-7, -6)).toBe(42);
        });

        it('should return NaN if one of the parameters is missing', () => {
            expect(multiplication(10)).toBeNaN();
        });

        it('should convert string inputs to numbers', () => {
            expect(multiplication('20', '4')).toBe(80);
            expect(multiplication('100', 10)).toBe(1000);
            expect(multiplication(30, '5')).toBe(150);
        });

        it('should return NaN if one parameter cannot be converted to a number', () => {
            expect(multiplication('hello', 5)).toBeNaN();
            expect(multiplication('20', 'world')).toBeNaN();
        });

        it('should handle multiplication by zero', () => {
            expect(multiplication(10, 0)).toBe(0);
            expect(multiplication(0, 0)).toBe(0);
            expect(multiplication(0, 5)).toBe(0);
        });
    });

    describe('percentage function', () => {
        it('should calculate the correct percentage of a number', () => {
            expect(percentage(200, 10)).toBe(20);
            expect(percentage(500, 50)).toBe(250);
            expect(percentage(1000, 25)).toBe(250);
        });

        it('should handle string inputs and convert them to numbers', () => {
            expect(percentage('200', '10')).toBe(20);
            expect(percentage('500', '50')).toBe(250);
            expect(percentage('1000', '25')).toBe(250);
        });

        it('should return NaN if one of the inputs cannot be converted to a number', () => {
            expect(percentage('hello', 10)).toBeNaN();
            expect(percentage(200, 'abc')).toBeNaN();
            expect(percentage('1000', 'xyz')).toBeNaN();
        });

        it('should return NaN if one of the parameters is missing', () => {
            expect(percentage(200)).toBeNaN();
        });

        it('should return 0 when multiplying by 0', () => {
            expect(percentage(200, 0)).toBe(0);
            expect(percentage(0, 50)).toBe(0);
        });

        it('should return the same number when 100% is applied', () => {
            expect(percentage(200, 100)).toBe(200);
            expect(percentage('500', '100')).toBe(500);
        });
    });

    describe('getWholeNumberPart function', () => {
        it('should return the whole part of a number', () => {
            expect(getWholeNumberPart(12.34)).toBe(12);
            expect(getWholeNumberPart(7.89)).toBe(7);
            expect(getWholeNumberPart(5)).toBe(5);
        });

        it('should handle string inputs and convert them to numbers', () => {
            expect(getWholeNumberPart('12.34')).toBe(12);
            expect(getWholeNumberPart('7.89')).toBe(7);
            expect(getWholeNumberPart('5')).toBe(5);
        });

        it('should return NaN if the input is not a valid number', () => {
            expect(getWholeNumberPart('hello')).toBeNaN();
            expect(getWholeNumberPart('abc')).toBeNaN();
            expect(getWholeNumberPart(NaN)).toBeNaN();
        });

        it('should handle negative numbers', () => {
            expect(getWholeNumberPart(-12.34)).toBe(-13);
            expect(getWholeNumberPart(-7.89)).toBe(-8);
            expect(getWholeNumberPart(-5)).toBe(-5);
        });

        it('should return NaN if the input is missing', () => {
            expect(getWholeNumberPart()).toBeNaN();
        });
    });

    describe('getEvenNumbers function', () => {
        it('should return an array of even numbers from an array of natural numbers', () => {
            expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
            expect(getEvenNumbers([10, 11, 12, 13, 14])).toEqual([10, 12, 14]);
            expect(getEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
        });

        it('should return an empty array if no even numbers are found', () => {
            expect(getEvenNumbers([1, 3, 5, 7])).toEqual([]);
            expect(getEvenNumbers([11, 13, 15, 17])).toEqual([]);
        });

        it('should return an empty array if the input array is empty', () => {
            expect(getEvenNumbers([])).toEqual([]);
        });

        it('should handle an array with a single number', () => {
            expect(getEvenNumbers([2])).toEqual([2]);
            expect(getEvenNumbers([3])).toEqual([]);
        });

        it('should return the same array if all numbers are even', () => {
            expect(getEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
        });

        it('should handle non-integer values gracefully', () => {
            expect(getEvenNumbers([1.5, 2, 3.5, 4])).toEqual([2, 4]);
        });
    });

    describe('getMaxNumber function', () => {
        it('should return the maximum number from an array of numbers', () => {
            expect(getMaxNumber([1, 2, 3, 4, 5, 6])).toBe(6);
            expect(getMaxNumber([10, 11, 12, 13, 14])).toBe(14);
            expect(getMaxNumber([2, 4, 6, 8])).toBe(8);
        });

        it('should return the only number if the array has one element', () => {
            expect(getMaxNumber([10])).toBe(10);
            expect(getMaxNumber([5])).toBe(5);
        });

        it('should return -Infinity if the input array is empty', () => {
            expect(getMaxNumber([])).toBe(-Infinity);
        });

        it('should handle negative numbers correctly', () => {
            expect(getMaxNumber([-1, -2, -3, -4, -5])).toBe(-1);
            expect(getMaxNumber([-10, -20, -30, -40])).toBe(-10);
        });

        it('should return the maximum even number if all numbers are even', () => {
            expect(getMaxNumber([2, 4, 6, 8])).toBe(8);
        });

        it('should return the maximum odd number if all numbers are odd', () => {
            expect(getMaxNumber([1, 3, 5, 7])).toBe(7);
        });

        it('should handle decimal numbers correctly', () => {
            expect(getMaxNumber([1.5, 2.5, 3.5, 4.5])).toBe(4.5);
        });
    });

    describe('getMinAndMaxNumbers function', () => {
        it('should return the correct min and max numbers from an array of numbers', () => {
            const result = getMinAndMaxNumbers([1, 2, 3, 4, 5, 6]);
            expect(result.min).toBe(1);
            expect(result.max).toBe(6);

            const result2 = getMinAndMaxNumbers([10, 11, 12, 13, 14]);
            expect(result2.min).toBe(10);
            expect(result2.max).toBe(14);

            const result3 = getMinAndMaxNumbers([2, 4, 6, 8]);
            expect(result3.min).toBe(2);
            expect(result3.max).toBe(8);
        });

        it('should return the same value for min and max if the array has only one element', () => {
            const result1 = getMinAndMaxNumbers([10]);
            expect(result1.min).toBe(10);
            expect(result1.max).toBe(10);

            const result2 = getMinAndMaxNumbers([5]);
            expect(result2.min).toBe(5);
            expect(result2.max).toBe(5);
        });

        it('should handle negative numbers correctly', () => {
            const result = getMinAndMaxNumbers([-1, -2, -3, -4, -5]);
            expect(result.min).toBe(-5);
            expect(result.max).toBe(-1);
        });

        it('should return NaN if the input array is empty', () => {
            const result = getMinAndMaxNumbers([]);
            expect(result.min).toBeNaN();
            expect(result.max).toBeNaN();
        });

        it('should handle decimal numbers correctly', () => {
            const result = getMinAndMaxNumbers([1.5, 2.5, 3.5, 4.5]);
            expect(result.min).toBe(1.5);
            expect(result.max).toBe(4.5);
        });

        it('should return the correct min and max when the array has both negative and positive numbers', () => {
            const result = getMinAndMaxNumbers([1, -2, 3, -4, 5]);
            expect(result.min).toBe(-4);
            expect(result.max).toBe(5);
        });
    });

    describe('arithmeticMeans function', () => {
        it('should return the correct arithmetic mean for a valid array of numbers', () => {
            const result = arithmeticMeans([1, 2, 3, 4, 5]);
            expect(result).toBe(3);

            const result2 = arithmeticMeans([10, 20, 30, 40]);
            expect(result2).toBe(25);

            const result3 = arithmeticMeans([2, 4, 6, 8]);
            expect(result3).toBe(5);
        });

        it('should return NaN if the array is empty', () => {
            const result = arithmeticMeans([]);
            expect(result).toBeNaN();
        });

        it('should return the value itself for a single-element array', () => {
            const result = arithmeticMeans([10]);
            expect(result).toBe(10);

            const result2 = arithmeticMeans([5]);
            expect(result2).toBe(5);
        });

        it('should handle decimal numbers correctly', () => {
            const result = arithmeticMeans([1.5, 2.5, 3.5, 4.5]);
            expect(result).toBe(3);
        });

        it('should return NaN for an array with only NaN values', () => {
            const result = arithmeticMeans([NaN, NaN, NaN]);
            expect(result).toBeNaN();
        });

        it('should handle negative numbers correctly', () => {
            const result = arithmeticMeans([-1, -2, -3, -4, -5]);
            expect(result).toBe(-3);
        });

        it('should return a negative value for an array of positive and negative numbers', () => {
            const result = arithmeticMeans([1, -2, 3, -4, 5]);
            expect(result).toBe(0.6);
        });
    });

    describe('getVowels function', () => {
        it('should return an array of vowels from the string', () => {
            const result = getVowels('hello');
            expect(result).toEqual(['e', 'o']);

            const result2 = getVowels('javascript');
            expect(result2).toEqual(['a', 'a', 'i']);

            const result3 = getVowels('AEIOU');
            expect(result3).toEqual(['A', 'E', 'I', 'O', 'U']);
        });

        it('should return an empty array if there are no vowels', () => {
            const result = getVowels('bcdfg');
            expect(result).toEqual([]);
        });

        it('should handle an empty string', () => {
            const result = getVowels('');
            expect(result).toEqual([]);
        });

        it('should handle a string with no vowels and spaces', () => {
            const result = getVowels('  ');
            expect(result).toEqual([]);
        });

        it('should handle a string with special characters', () => {
            const result = getVowels('!@#a*1');
            expect(result).toEqual(['a']);
        });

        it('should handle both uppercase and lowercase vowels', () => {
            const result = getVowels('Hello WORLD');
            expect(result).toEqual(['e', 'o', 'O']);
        });
    });


    describe('cancatString function', () => {
        it('should concatenate array of strings into a single string', () => {
            const result = cancatString(['Hello', ' ', 'World']);
            expect(result).toBe('Hello World');

            const result2 = cancatString(['Java', 'Script']);
            expect(result2).toBe('JavaScript');
        });

        it('should return an empty string if the array is empty', () => {
            const result = cancatString([]);
            expect(result).toBe('');
        });

        it('should handle an array with one element', () => {
            const result = cancatString(['single']);
            expect(result).toBe('single');
        });

        it('should handle an array with numbers as strings', () => {
            const result = cancatString(['1', '2', '3']);
            expect(result).toBe('123');
        });

        it('should handle an array with special characters', () => {
            const result = cancatString(['!', '@', '#']);
            expect(result).toBe('!@#');
        });

        it('should handle an array with mixed types (number and string)', () => {
            const result = cancatString([1, 'apple', 3]);
            expect(result).toBe('1apple3');
        });
    });

    describe('splitString function', () => {
        it('should split the string based on the provided divider', () => {
            const result = splitString('apple,banana,orange', ',');
            expect(result).toEqual(['apple', 'banana', 'orange']);

            const result2 = splitString('dog|cat|mouse', '|');
            expect(result2).toEqual(['dog', 'cat', 'mouse']);
        });

        it('should return an array with the original string if the divider is not found', () => {
            const result = splitString('hello world', ',');
            expect(result).toEqual(['hello world']);
        });

        it('should return an array with one empty string if the input string is empty', () => {
            const result = splitString('', ',');
            expect(result).toEqual(['']);
        });

        it('should handle multiple consecutive dividers', () => {
            const result = splitString('apple,,banana,,orange', ',');
            expect(result).toEqual(['apple', '', 'banana', '', 'orange']);
        });

        it('should handle the divider being the same as the string', () => {
            const result = splitString('hello', 'hello');
            expect(result).toEqual(['', '']);
        });

        it('should handle string with no divider and a single character string as input', () => {
            const result = splitString('a', 'b');
            expect(result).toEqual(['a']);
        });
    });

    describe('hasSubString function', () => {
        it('should return true if the string contains the substring', () => {
            const result = hasSubString('hello world', 'hello');
            expect(result).toBe(true);

            const result2 = hasSubString('JavaScript is awesome', 'awesome');
            expect(result2).toBe(true);
        });

        it('should return false if the string does not contain the substring', () => {
            const result = hasSubString('hello world', 'goodbye');
            expect(result).toBe(false);

            const result2 = hasSubString('JavaScript is awesome', 'fantastic');
            expect(result2).toBe(false);
        });

        it('should return true if the substring is an empty string', () => {
            const result = hasSubString('hello world', '');
            expect(result).toBe(true);
        });

        it('should return false if the main string is empty', () => {
            const result = hasSubString('', 'hello');
            expect(result).toBe(false);
        });

        it('should return true if the string and the substring are the same', () => {
            const result = hasSubString('hello', 'hello');
            expect(result).toBe(true);
        });

        it('should be case-sensitive when checking for substring', () => {
            const result = hasSubString('Hello World', 'hello');
            expect(result).toBe(false);
        });
    });

    describe('isLowerCase function', () => {
        it('should return true if the character is in lowercase', () => {
            expect(isLowerCase('a')).toBe(true);
            expect(isLowerCase('z')).toBe(true);
            expect(isLowerCase('b')).toBe(true);
        });

        it('should return false if the character is not in lowercase', () => {
            expect(isLowerCase('A')).toBe(false);
            expect(isLowerCase('Z')).toBe(false);
            expect(isLowerCase('B')).toBe(false);
        });

        it('should return true if the character is already in lowercase', () => {
            expect(isLowerCase('c')).toBe(true);
        });

        it('should return false if the character is uppercase', () => {
            expect(isLowerCase('C')).toBe(false);
        });
    });
});
