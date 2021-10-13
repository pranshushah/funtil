import { split_at } from '../split_at';

it('should work with 2 args', () => {
  let result = split_at(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([
    [1, 2, 3],
    [4, 5, 6, 7, 8, 9],
  ]);
  let result1 = split_at(3, 'pranshu');
  expect(result1).toEqual(['pra', 'nshu']);
});

it('should work with 1 args', () => {
  let splitArrayAt3 = split_at(3);
  expect(splitArrayAt3([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    [1, 2, 3],
    [4, 5, 6, 7, 8, 9],
  ]);
  let splitStringAt3 = split_at(3);
  expect(splitStringAt3('pranshu')).toEqual(['pra', 'nshu']);
});
