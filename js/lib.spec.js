const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Testuvannya funkcii vidmimannya', () => {
    it('povertaye vidnyate chislo', () => {
      expect(lib.subtraction(7, 3)).toEqual(4);
    });

    it('konvertuye v chislo ta vidiymaye', () => {
      expect(lib.subtraction('13', '7')).toEqual(5);
    });
  });


  describe('testuye dodavannya', () => {
    it('povertaye sumu chisel', () => {
      expect(lib.sum(2, 2)).toEqual(4)
      expect(lib.sum(-3, 1)).toEqual(-2)
      expect(lib.sum(-1, 1)).toEqual(0)
    });

    it('poverne NaN if parameter propusheno', () => {
     expect(lib.sum(1)).toBe(NaN);
    });


    it('dodaye string i number', () => {
      expect(lib.sum('2', '2')).toEqual(4)
      expect(lib.sum(7, '4')).toEqual(11)
      expect(lib.sum('4', 5)).toEqual(9)
    });
  });

  describe('rachuye procent vid chisla', () => {
    it('should calculate the lib.percentage correctly', () => {
      expect(lib.percentage(50, 8)).toEqual(4);
    });

    it('procent vid chisla z ryadka', () => {
      expect(lib.percentage('50', '8')).toEqual(4);
    });

    it('procent vid vidyemnogo chisla', () => {
      expect(lib.percentage(-50, 8)).toEqual(-4);
    });

    it('0 procentiv vid chisla', () => {
      expect(lib.percentage(0, 8)).toEqual(0);
    });

    it('procent vid 0', () => {
      expect(lib.percentage(50, 0)).toEqual(0);
    });
  });

  describe('test func dilennya', () => {
    it('dilennya', () => {
      expect(lib.division(4, 2)).toEqual(2);
    });

    it('poverne NaN yaksho dilennya na 0', () => {
      expect(lib.division(3, 0)).toBe(NaN);
    });

    it('corectno dilit sting na string', () => {
      expect(lib.division('8', '2')).toEqual(4);
    });
  });

  describe('test mnozhennya', () => {
    it('mnozhit chisla', () => {
      expect(lib.multiplication(4, 2)).toEqual(8);
    });

    it('mnozhit string na string', () => {
      expect(lib.multiplication('4', '2')).toEqual(8);
    });
  });

  describe('testuye funkciyu chiloyi chastini vid chisla', () => {
    it('corectno povertaye chislo', () => {
      expect(lib.getWholeNumberPart(4.8)).toEqual(4);
      expect(lib.getWholeNumberPart(8.5)).toEqual(8);
      expect(lib.getWholeNumberPart(10)).toEqual(10);
    });

    it('poverne NaN yakcso dano ne chislo', () => {
      expect(lib.getWholeNumberPart(undefined)).toBeNaN();
      expect(lib.getWholeNumberPart('abc')).toBeNaN();
    });

    it('rachuye vid vidyemnogo chisla', () => {
      expect(lib.getWholeNumberPart(-4.9)).toEqual(-4);
      expect(lib.getWholeNumberPart(-4.5)).toEqual(-4);
      expect(lib.getWholeNumberPart(-10)).toEqual(-10);
    });

    it('rachuye vid 0', () => {
      expect(lib.getWholeNumberPart(0)).toEqual(0);
    });
  });

  describe('Testuye func getMaxNumber', () => {
    it('poverne maximalne chislo z masivu', () => {
      expect(lib.getMaxNumber([1, 2, 3, 4, 5, 6])).toEqual(6);
      expect(lib.getMaxNumber([1, 3, 4, 8, 2])).toEqual(8);
      expect(lib.getMaxNumber([-2, -1, 0, 1, 2])).toEqual(2);
    });

    it('poverne yakscho spisok maye lishe 1', () => {
      expect(lib.getMaxNumber([8])).toEqual(8);
      expect(lib.getMaxNumber([-4])).toEqual(-4);
    });

    it('poverne NaN yakscho masiv pustiy', () => {
      expect(lib.getMaxNumber([])).toBeNaN();
    });
  });

  describe('Testuye getEvenNumbers', () => {
    it('povertaye obrani chisla z spisku', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(lib.getEvenNumbers([-3, -2, 0, 2, 3])).toEqual([-2, 0, 2]);
    });

    it('poverne pustii masiv yakscho priymaye pustiy spisok', () => {
      expect(lib.getEvenNumbers([1, 3, 5, 7])).toEqual([]);
      expect(lib.getEvenNumbers([-1, 3, 5])).toEqual([]);
      expect(lib.getEvenNumbers([])).toEqual([]);
    });
  });

  describe('testuye funkciyu getMinAndMaxNumbers', () => {
    it('povertaye min and max z masivu', () => {
      expect(lib.getMinAndMaxNumbers([5, 1, 8, 4, 3])).toEqual({ min: 1, max: 8 });
      expect(lib.getMinAndMaxNumbers([0, -1, 1, 2])).toEqual({ min: -1, max: 2 });
      expect(lib.getMinAndMaxNumbers([4])).toEqual({ min: 4, max: 4 });
    });
  });

  describe('testuye funkciyu arithmeticMeans', () => {
    it('povertaye arithmetic serednye spisku chisel', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
      expect(lib.arithmeticMeans([10, 20, 30, 40])).toEqual(25);
      expect(lib.arithmeticMeans([-1, 0, 1])).toEqual(0);
    });

    it('povertaye NaN yakscho masiv pustii', () => {
      expect(lib.arithmeticMeans([])).toBeNaN();
    });
  });

  describe('testuye funkciyu getVowels', () => {
    it('poverne pustiy masiv yakscho ryadok pustiy', () => {
      expect(lib.getVowels('')).toEqual([]);
    });

    it('poverne pustiy masiv yakscho ryadok bez golosnih', () => {
      expect(lib.getVowels('fffgzs')).toEqual([]);
    });

    it('poverne masiv z golosnimi z ryadka', () => {
      expect(lib.getVowels('Konyk')).toEqual(['o', 'y']);
    });

    it('poverne golosni v dvoh registrah', () => {
      expect(lib.getVowels('OIUyea')).toEqual(['O', 'I', 'U', 'y', 'e', 'a']);
    });

    it('propuskaye simvoli ta chisla', () => {
      expect(lib.getVowels('K0nyk')).toEqual(['y']);
    });
  });

  describe('testuye funkciyu cancatString', () => {
    it('obyednuye ryadki', () => {
      expect(lib.cancatString(['Olexandr', 'Konyk'])).toEqual('OlexandrKonyk');
      expect(lib.cancatString(['z', 'x', 'c'])).toEqual('zxc');
      expect(lib.cancatString(['I', 'am', 'groot'])).toEqual('Iamgroot');
    });
  });

  describe('testuye funkciyu splitString', () => {
    it('dilit ryadok po vvedenomu znaku', () => {
      expect(lib.splitString('Olexandr Konyk', ' ')).toEqual(['Olexandr', 'Konyk']);
      expect(lib.splitString('I?am?groot', '?')).toEqual(['I', 'am', 'groot']);
      expect(lib.splitString('1,2,3,4', ',')).toEqual(['1', '2', '3', '4']);
    });

    it('poverne masiv z 1 elementom yakscho znak ne znaydeno', () => {
      expect(lib.splitString('I am groot', ',')).toEqual(['I am groot']);
      expect(lib.splitString('1234', ',')).toEqual(['1234']);
    });
  });

  describe('Testuye funkciyu hasSubString', () => {
    it('poverne true yakscho pidstroku znaydeno', () => {
      expect(lib.hasSubString('I am groot', 'am')).toBe(true);
    });

    it('poverne false yakscho ne mistit pidstroku', () => {
      expect(lib.hasSubString('I am groot', 'as')).toBe(false);
    });

    it('poverne true yaksho pidtroka taka yar ryadok', () => {
      expect(lib.hasSubString('Konyk', 'Konyk')).toBe(true);
    });
  });

  describe('Testuye funkciyu isLowerCase', () => {
    it('poverne true uakscho nizniy registr', () => {
      expect(lib.isLowerCase('k')).toBe(true);
    });

    it('poverne false yakscho litera velika', () => {
      expect(lib.isLowerCase('K')).toBe(false);
    });

    it('poverne false dlya chisel ta znakiv', () => {
      expect(lib.isLowerCase('4')).toBe(false);
      expect(lib.isLowerCase('?')).toBe(false);
    });
  });

});