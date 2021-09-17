import { zip } from '../zip';

it('should merge the array', () => {
  let result = zip(['1', '2', '3'], [1, 2, 3]);
  expect(result).toEqual([
    ['1', 1],
    ['2', 2],
    ['3', 3],
  ]);
});

it('should merge patrial the array', () => {
  let numberZipper = zip(['1', '2', '3']);
  let result = numberZipper([1, 2, 3]);
  expect(result).toEqual([
    ['1', 1],
    ['2', 2],
    ['3', 3],
  ]);
});
