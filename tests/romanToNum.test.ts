import { romanToNum } from "../src/RomanNumerals";

test.each([
  ["I", 1],
  ["II", 2],
  ["V", 5],
  ["IV", 4],
  ["X", 10],
  ["IX", 9],
  ["L", 50],
  ["XL", 40],
  ["C", 100],
  ["XIX", 19],
  ["D", 500],
  ["M", 1000],
  ["XC", 90],
  ["CM", 900],
  ["A", null],
  ["MCMLXXXVI", 1986],
  ["MCMLGXXXVI", null],
  ["IC", null],
  ["IVXXXLMCM", null],
])("Roman numeral %p = %p", (input: string, expected: number | null) => {
  expect(romanToNum(input)).toEqual(expected);
});
