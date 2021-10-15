import { gt } from '../../Logic/gt';
import { split_when } from '../split_when';

it('should work with 2 args', () => {
  let result = split_when(gt(5), [11, 2, 3, 6, 1, 4, 8, 3]);
  expect(result).toEqual([[11], [2, 3, 6], [1, 4, 8], [3]]);
});

it('should work with 1 args', () => {
  let splitArray = split_when(gt(5));
  let result = splitArray([11, 2, 3, 6, 1, 4, 8, 3]);
  expect(result).toEqual([[11], [2, 3, 6], [1, 4, 8], [3]]);
});
