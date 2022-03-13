type Numeral =
  | { character: "I"; value: 1 }
  | { character: "V"; value: 5 }
  | { character: "X"; value: 10 }
  | { character: "L"; value: 50 }
  | { character: "C"; value: 100 }
  | { character: "D"; value: 500 }
  | { character: "M"; value: 1000 };

const allNumerals: Numeral[] = [
  { character: "I", value: 1 },
  { character: "V", value: 5 },
  { character: "X", value: 10 },
  { character: "L", value: 50 },
  { character: "C", value: 100 },
  { character: "D", value: 500 },
  { character: "M", value: 1000 },
];

const toNumeral = (numeralCharacter: string): Numeral | undefined => {
  return allNumerals.find((n) => n.character === numeralCharacter);
};

class RomanNumeralResult {
  constructor(
    public total: number | null = 0,
    public previousNumeralValue?: number
  ) {}
}

const romanToNum = (romanNumeral: string): number | null => {
  const result = [...romanNumeral].reduce<RomanNumeralResult>(
    (result, character) => {
      if (result.total !== null) {
        const currentNumeral = toNumeral(character);
        if (currentNumeral) {
          if (
            result.previousNumeralValue &&
            result.previousNumeralValue < currentNumeral.value
          ) {
            //we are in a case where we need to subtract
            return new RomanNumeralResult(
              currentNumeral.value -
                2 * result.previousNumeralValue +
                result.total,
              currentNumeral.value
            );
          }
          //otherwise we're in a typical adding situation
          return new RomanNumeralResult(
            currentNumeral.value + result.total,
            currentNumeral.value
          );
        }
      }
      return new RomanNumeralResult(null);
    },
    new RomanNumeralResult()
  );
  return result.total;
};

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
])("Roman numeral %p = %p", (input: string, expected: number | null) => {
  expect(romanToNum(input)).toEqual(expected);
});
