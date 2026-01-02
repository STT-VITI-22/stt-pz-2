function subtraction(a, b) {
  return Number(a) - Number(b);
}

function division(a, b) {
  return Number(a) / Number(b);
}

function multiplication(a, b) {
  return Number(a) * Number(b);
}

function percentage(value, percent) {
  return Number(value) * Number(percent) / 100;
}

function getWholeNumberPart(number) {
  return Math.trunc(Number(number));
}

function getEvenNumbers(numbers) {
  return numbers
    .map(Number)
    .filter(n => Number.isInteger(n) && n % 2 === 0);
}

function getMaxNumber(numbers) {
  const validNumbers = numbers
    .map(Number)
    .filter(n => !Number.isNaN(n));

  return Math.max(...validNumbers);
}

function getMinAndMaxNumbers(numbers) {
  const validNumbers = numbers
    .map(Number)
    .filter(n => !Number.isNaN(n));

  return {
    min: Math.min(...validNumbers),
    max: Math.max(...validNumbers)
  };
}

function arithmeticMeans(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((acc, n) => acc + Number(n), 0);
  return sum / numbers.length;
}

function getVowels(str) {
  const vowels = 'aeiouyAEIOUY';
  return str.split('').filter(char => vowels.includes(char));
}

function cancatString(str) {
  return str.map(item => String(item)).join('');
}

function splitString(str, divider) {
  return str.split(divider);
}

function hasSubString(str, subStr) {
  return str.includes(subStr);
}

function isLowerCase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

function wgs84ToMGRS(lat, lon, precision = 5) {
  if (precision < 1 || precision > 5) {
    throw new Error('Precision must be between 1 and 5');
  }

  const a = 6378137;
  const f = 1 / 298.257223563;
  const k0 = 0.9996;

  let zone = Math.floor((lon + 180) / 6) + 1;

  if (lat >= 56.0 && lat < 64.0 && lon >= 3.0 && lon < 12.0) {
    zone = 32;
  }

  if (lat >= 72.0 && lat < 84.0) {
    if (lon >= 0.0 && lon < 9.0) zone = 31;
    else if (lon >= 9.0 && lon < 21.0) zone = 33;
    else if (lon >= 21.0 && lon < 33.0) zone = 35;
    else if (lon >= 33.0 && lon < 42.0) zone = 37;
  }

  const centralMeridian = (zone - 1) * 6 - 180 + 3;

  const φ = lat * Math.PI / 180;
  const λ = lon * Math.PI / 180;
  const λ0 = centralMeridian * Math.PI / 180;

  const e2 = 2 * f - f * f;
  const ep2 = e2 / (1 - e2);

  const sinφ = Math.sin(φ);
  const cosφ = Math.cos(φ);
  const tanφ = Math.tan(φ);

  const N = a / Math.sqrt(1 - e2 * sinφ * sinφ);
  const T = tanφ * tanφ;
  const C = ep2 * cosφ * cosφ;
  const A = (λ - λ0) * cosφ;

  const M = a * (
    (1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 * e2 * e2 / 256) * φ -
    (3 * e2 / 8 + 3 * e2 * e2 / 32 + 45 * e2 * e2 * e2 / 1024) * Math.sin(2 * φ) +
    (15 * e2 * e2 / 256 + 45 * e2 * e2 * e2 / 1024) * Math.sin(4 * φ) -
    (35 * e2 * e2 * e2 / 3072) * Math.sin(6 * φ)
  );

  const easting = 500000 + k0 * N * (
    A +
    (1 - T + C) * A ** 3 / 6 +
    (5 - 18 * T + T * T + 72 * C - 58 * ep2) * A ** 5 / 120
  );

  let northing = k0 * (M + N * tanφ * (
    A ** 2 / 2 +
    (5 - T + 9 * C + 4 * C * C) * A ** 4 / 24 +
    (61 - 58 * T + T * T + 600 * C - 330 * ep2) * A ** 6 / 720
  ));

  if (lat < 0) northing += 10000000;

  const bandLetters = 'CDEFGHJKLMNPQRSTUVWX';
  const bandIndex = Math.floor((lat + 80) / 8);
  const band = bandLetters.charAt(bandIndex);

  const east100k = Math.floor(easting / 100000);
  const north100k = Math.floor((northing % 10000000) / 100000);

  const setCol = ((zone - 1) % 3) + 1;
  const eastLetterIndex = ((east100k - 1 + (setCol - 1) * 8) % 24 + 24) % 24;

  const rowOffset = zone % 2 === 1 ? 0 : 5;
  const northLetterIndex = (Math.floor(north100k / 100000) + rowOffset) % 20;

  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const sq1 = letters.charAt(eastLetterIndex);
  const sq2 = letters.charAt(northLetterIndex);

  const digits = precision;
  const gridSize = Math.pow(10, 5 - precision);

  const e = Math.floor((easting % 100000) / gridSize);
  const n = Math.floor((northing % 100000) / gridSize);

  const eStr = e.toString().padStart(digits, '0');
  const nStr = n.toString().padStart(digits, '0');

  const zoneStr = zone.toString().padStart(2, '0');
  return `${zoneStr}${band}${sq1}${sq2}${eStr}${nStr}`;
}

// Обов’язково в кінці файлу lib.js:
module.exports = {
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
  wgs84ToMGRS
};