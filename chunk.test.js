const chunkArray = require('./chunk');

test('chunkArray exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with the length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunked = chunkArray(numbers, len);
  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Chunk an array of 10 values with the length of 3', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 3;
  const chunked = chunkArray(numbers, len);
  expect(chunked).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
});

test('Chunk an array of 3 values with the length of 1', () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunked = chunkArray(numbers, len);
  expect(chunked).toEqual([[1], [2], [3]]);
});
