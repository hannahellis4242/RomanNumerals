import { numToRoman } from "../src/RomanNumerals";

test.each([
  [1, "I"],
  /*[2, "II"],
  [5, "V"],
  [4, "IV"],
  [10, "X"],
  [9, "IX"],
  [50, "L"],
  [40, "XL"],
  [100, "C"],
  [19, "XIX"],
  [500, "D"],
  [1000, "M"],
  [90, "XC"],
  [900, "CM"],
  [1986, "MCMLXXXVI"],*/
])("Number %p = %p", (input: number, expected: string) => {
  expect(numToRoman(input)).toEqual(expected);
});
