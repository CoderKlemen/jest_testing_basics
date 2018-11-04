const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeUndefined
test('Should be undefined', () => {
  expect(functions.isUndefined()).toBeUndefined();
});

// toBeTruthy
test('Should be truthy', () => {
  expect(functions.isTruthy()).toBeTruthy();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.isFalsy()).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(1)).not.toBeFalsy();
  expect(functions.checkValue('')).toBeFalsy();
});

// Testing objects for equality
test('User should be Jst Polencek object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Jst', lastName: 'Polencek' });
});

// link: https://www.youtube.com/watch?v=7r4xVDI2vho
// finished at 15:20
