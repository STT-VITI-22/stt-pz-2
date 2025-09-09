const lib = require('../lib');

describe('Test suite for testing lib.js', () => {
    describe('Test suite for testing subtraction function', () => {
        it('should return subtraction of two numbers', () => {
            expect(lib.subtraction(5, 1)).toEqual(4);
        });
    });

    describe('Test suite for testing division function', () => {
        it('should return division of two numbers', () => {
            expect(lib.division(4, 2)).toEqual(2);
        })
    })

    describe('Test suite for testing multiplication function', () => {
        it('should return multiplication of two numbers', () => {
            expect(lib.multiplication(4, 2)).toEqual(8);
        })
    })

    describe('Test suite for testing percentage function', () => {
        it('should return percentage of two numbers', () => {
            expect(lib.percentage(10, 2)).toEqual(20);
        })
    })

    describe('Test suite for testing percentage function', () => {
        it('should return percentage of two numbers', () => {
            expect(lib.percentage(10, 2)).toEqual(20);
        })
    })

    describe('Test suite for testing getWholeNumberPart function', () => {
        it('should return whole part of number', () => {
            expect(lib.getWholeNumberPart(10.5123)).toEqual(10);
        })
    })

    describe('Test suite for testing getEvenNumbers function', () => {
        it('should return array of even number', () => {
            expect(lib.getEvenNumbers([2, 6, 3, 5, 8])).toEqual([2, 6, 8]);
        })
    })

    describe('Test suite for testing getMaxNumber function', () => {
        it('should return get Max number from array', () => {
            expect(lib.getMaxNumber([2, 6, 3, 5, 8])).toEqual(8);
        })
    })

    describe('Test suite for testing getMinAndMaxNumbers function', () => {
        it('should return object with min and  max number from array', () => {
            expect(lib.getMinAndMaxNumbers([2, 6, 3, 5, 8])).toEqual({min: 2, max: 8});
        })
    })

    describe('Test suite for testing arithmeticMeans function', () => {
        it('should return arithmetic means from array of numbers', () => {
            expect(lib.arithmeticMeans([2, 8, 11])).toEqual(7);
        })
    })

    describe('Test suite for testing getVowels function', () => {
        it('should return array of vowels form string', () => {
            expect(lib.getVowels("aaperolyu")).toEqual(["a", "a", "e", "o", "y", "u"]);
        })
    })

    describe('Test suite for testing concatString function', () => {
        it('should return concated them into one string', () => {
            expect(lib.concatString(["ala", "bama"])).toEqual("alabama");
            expect(lib.concatString(["alabama"])).toEqual("alabama");
        })
    })

    describe('Test suite for testing splitString function', () => {
        it('should return splited string according to divider', () => {
            expect(lib.splitString("alabama", "a")).toEqual(["", "l", "b", "m", ""]);
        })
    })

    describe('Test suite for testing hasSubString function', () => {
        it('should return true if string contains substring', () => {
            expect(lib.hasSubString("alabama", "aba")).toEqual(true);
            expect(lib.hasSubString("alabama", "oro")).toEqual(false);
        })
    })

    describe('Test suite for testing isLowerCase function', () => {
        it('should return true if char is in lower case', () => {
            expect(lib.isLowerCase("alAbama")).toEqual(false);
            expect(lib.isLowerCase("alabama")).toEqual(true);
        })
    })

});


