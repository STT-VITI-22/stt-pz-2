const { loadFeatures, autoBindSteps } = require('jest-cucumber');
const lib = require('./lib');

const parseValue = (raw) => {
  const quoted = raw.match(/^"(.*)"$/);
  return quoted ? quoted[1] : Number(raw);
};
const parseNumbers = (list) => list.split(',').map((n) => Number(n.trim()));
const parseQuotedList = (list) => [...list.matchAll(/"([^"]*)"/g)].map((m) => m[1]);
const parseBoolean = (raw) => raw === 'true';

/**
 * Scenario state ("world"). It is cleared before every scenario
 * so scenarios stay isolated from each other.
 */
const world = {};
beforeEach(() => {
  Object.keys(world).forEach((key) => delete world[key]);
});

/**
 * Shared step definitions for all features in /features.
 */
const steps = ({ given, and, when, then }) => {

  // runs an action and stores either its result or the thrown error
  const act = (fn) => {
    try {
      world.result = fn();
    } catch (error) {
      world.error = error;
    }
  };

  // ---------- Given ----------
  given(/^the first value is (.*)$/, (raw) => { world.a = parseValue(raw); });
  and(/^the second value is (.*)$/, (raw) => { world.b = parseValue(raw); });
  given(/^the numbers (.*)$/, (list) => { world.numbers = parseNumbers(list); });
  given('an empty list of numbers', () => { world.numbers = []; });
  given(/^the text "(.*)"$/, (text) => { world.text = text; });
  given(/^the strings (.*)$/, (list) => { world.strings = parseQuotedList(list); });
  given(/^the character "(.*)"$/, (char) => { world.char = char; });

  // ---------- When ----------
  when('I add them', () => act(() => lib.sum(world.a, world.b)));
  when('I subtract the second from the first', () => act(() => lib.subtraction(world.a, world.b)));
  when('I multiply them', () => act(() => lib.multiplication(world.a, world.b)));
  when('I divide the first by the second', () => act(() => lib.division(world.a, world.b)));
  when('I calculate the percentage', () => act(() => lib.percentage(world.a, world.b)));
  when('I get the whole part of it', () => act(() => lib.getWholeNumberPart(world.a)));
  when('I take the even numbers', () => act(() => lib.getEvenNumbers(world.numbers)));
  when('I take the maximum number', () => act(() => lib.getMaxNumber(world.numbers)));
  when('I take the minimum and maximum numbers', () => act(() => lib.getMinAndMaxNumbers(world.numbers)));
  when('I calculate the arithmetic mean', () => act(() => lib.arithmeticMeans(world.numbers)));
  when('I take the vowels', () => act(() => lib.getVowels(world.text)));
  when('I concatenate them', () => act(() => lib.cancatString(world.strings)));
  when(/^I split it by "(.*)"$/, (divider) => act(() => lib.splitString(world.text, divider)));
  when(/^I check whether it contains "(.*)"$/, (sub) => act(() => lib.hasSubString(world.text, sub)));
  when('I check whether it is lower case', () => act(() => lib.isLowerCase(world.char)));

  // ---------- Then ----------
  then(/^the result should be (.*)$/, (expected) => {
    expect(world.error).toBeUndefined();
    expect(world.result).toBeCloseTo(Number(expected));
  });
  then(/^an error "(.*)" should be thrown$/, (message) => {
    expect(world.error).toBeInstanceOf(Error);
    expect(world.error.message).toBe(message);
  });
  then(/^I should get the numbers (.*)$/, (list) => {
    expect(world.result).toEqual(parseNumbers(list));
  });
  then('I should get an empty list', () => {
    expect(world.result).toEqual([]);
  });
  then(/^the minimum should be (.*) and the maximum should be (.*)$/, (min, max) => {
    expect(world.result).toEqual({ min: Number(min), max: Number(max) });
  });
  then(/^I should get the characters "(.*)"$/, (chars) => {
    expect(world.result).toEqual(chars === '' ? [] : chars.split(','));
  });
  then(/^the text result should be "(.*)"$/, (text) => {
    expect(world.result).toBe(text);
  });
  then(/^I should get the parts (.*)$/, (list) => {
    expect(world.result).toEqual(parseQuotedList(list));
  });
  then(/^the answer should be (true|false)$/, (answer) => {
    expect(world.result).toBe(parseBoolean(answer));
  });
};

autoBindSteps(loadFeatures('features/**/*.feature'), [steps]);
