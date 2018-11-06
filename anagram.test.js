const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is anagram of "iceman"', () => {
  const str1 = 'c1nema';
  const str2 = '1ceman';

  expect(isAnagram(str1, str2)).toBeTruthy();
});

test('"Dormitory" is anagram of "dirty room##', () => {
  const str1 = 'Dormitory';
  const str2 = 'dirty room##';

  expect(isAnagram(str1, str2)).toBeTruthy();
});

test('"Hello" is not an anagram of "byebye"', () => {
  const str1 = 'Hello';
  const str2 = 'byebye';

  expect(isAnagram(str1, str2)).toBeFalsy();
});
