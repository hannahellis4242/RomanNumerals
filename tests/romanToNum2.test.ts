type Token =
  | { symbol: "I"; value: 1 }
  | { symbol: "IV"; value: 4 }
  | { symbol: "V"; value: 5 }
  | { symbol: "IX"; value: 9 }
  | { symbol: "X"; value: 10 }
  | { symbol: "XL"; value: 40 }
  | { symbol: "L"; value: 50 }
  | { symbol: "XC"; value: 90 }
  | { symbol: "C"; value: 100 }
  | { symbol: "CD"; value: 400 }
  | { symbol: "D"; value: 500 }
  | { symbol: "CM"; value: 900 }
  | { symbol: "M"; value: 1000 };

const allTokens: Token[] = [
  { symbol: "I", value: 1 },
  { symbol: "IV", value: 4 },
  { symbol: "V", value: 5 },
  { symbol: "IX", value: 9 },
  { symbol: "X", value: 10 },
  { symbol: "XL", value: 40 },
  { symbol: "L", value: 50 },
  { symbol: "XC", value: 90 },
  { symbol: "C", value: 100 },
  { symbol: "CD", value: 400 },
  { symbol: "D", value: 500 },
  { symbol: "CM", value: 900 },
  { symbol: "M", value: 1000 },
];

const allTwoCharTokens = allTokens.filter(({ symbol }) => symbol.length === 2);
const allSingleCharTokens = allTokens.filter(
  ({ symbol }) => symbol.length === 1
);

const parseRomanNumeral = (input: string, total: number): number | null => {
  if (input.length === 0) {
    return total;
  }
  if (input.length >= 2) {
    const firstTwoCharacters = input.substring(0, 2);
    const matchingToken = allTwoCharTokens.find(
      ({ symbol }) => symbol === firstTwoCharacters
    );
    if (matchingToken) {
      return parseRomanNumeral(input.substring(2), total + matchingToken.value);
    }
  }
  const firstCharacter = input.substring(0, 1);
  const matchingToken = allSingleCharTokens.find(
    ({ symbol }) => symbol === firstCharacter
  );
  if (matchingToken) {
    return parseRomanNumeral(input.substring(1), total + matchingToken.value);
  }
  return null;
};

const romanToNum2 = (romanNumeral: string): number | null => {
  return parseRomanNumeral(romanNumeral, 0);
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
  ["A", null],
])("Roman numeral %p = %p", (input: string, expected: number | null) => {
  expect(romanToNum2(input)).toEqual(expected);
});
