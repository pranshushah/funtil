import { move } from '../move';

it('should work with 3 args', () => {
  let result = move(-1, 0, [1, 2, 3]);
  expect(result).toEqual([3, 1, 2]);
  result = move(0, -1, [0, 1, 2, 3]);
  expect(result).toEqual([1, 2, 3, 0]);
  result = move(0, -5, [0, 1, 2, 3]);
  expect(result).toEqual([0, 1, 2, 3]);
  result = move(-5, -1, [0, 1, 2, 3]);
  expect(result).toEqual([0, 1, 2, 3]);
  result = move(0, 2, [0, 1, 2, 3]);
  expect(result).toEqual([1, 2, 0, 3]);
});

it('should work with 2 args', () => {
  let arrayMover = move(0, 2);
  let result = arrayMover([0, 1, 2, 3]);
  expect(result).toEqual([1, 2, 0, 3]);
});

it('should work with 1 args', () => {
  let secondIndexAndArray = move(0);
  let arrayMover = secondIndexAndArray(2);
  let result = arrayMover([0, 1, 2, 3]);
  expect(result).toEqual([1, 2, 0, 3]);
});
