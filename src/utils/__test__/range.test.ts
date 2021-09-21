import { range } from '../range';

it('should work 2 args', () => {
  let result = range(0, 11);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it('should work 1 args', () => {
  let startsFromZero = range(0);
  expect(startsFromZero(11)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(startsFromZero(5)).toEqual([0, 1, 2, 3, 4]);
  expect(startsFromZero(3)).toEqual([0, 1, 2]);
});
