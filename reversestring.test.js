const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('string is reversed', () => {
  const str = 'bla';
  expect(reverseString(str)).toEqual('alb');
});

test('string is reversed with uppercase', () => {
  const str = 'Bla';
  expect(reverseString(str)).toEqual('alb');
});
