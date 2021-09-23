import { unnest } from '../unnest';

it('it should flatten in different states', () => {
  let result: any = unnest([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  result = unnest([[1, 2], [[4]]]);
  expect(result).toEqual([1, 2, [4]]);
});
