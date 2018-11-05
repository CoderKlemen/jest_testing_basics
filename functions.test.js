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
// toBe is for primitive types
test('User should be Jst Polencek object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Jst', lastName: 'Polencek' });
});

// less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  const load3 = 800;
  expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load3).toBeLessThanOrEqual(1600);
});

// regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
  // playing around
  expect('teamI').toMatch(/I/);
  expect('teami').not.toMatch(/I/);
  expect('teami').toMatch(/I/i);
});

// arrays
test('admin should be in username', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
  expect(usernames).not.toContain('chris');
});

// Promise !
// working with async data
test('user fetched name should be Leanne Graham', () => {
  expect.assertions(1); // number of assertions we expect
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// WRONG BEHAVIOUR -> this sometimes passes, and sometimes it doesn't
// no matter what we put in toEqual() !!!!
// we need both assertion and return, for it to work correctly
/*
test('user fetched name should be Leanne Graham', () => {
  // expect.assertions(1); // number of assertions we expect
  functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham1');
  });
});
*/

// Async await syntax
test('user fetched name should be Leanne Graham', async () => {
  expect.assertions(1); // number of assertions we expect
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
