import { flatten } from '../flatten';

it('should flat the given array', () => {
  const base = [1, 2, [1, 2, 3, [2, 3]], 5, 6];
  const res = flatten(base);
  expect(res.length).toBe(9);
  expect(base.length).toBe(5);
  expect(res).toEqual([1, 2, 1, 2, 3, 2, 3, 5, 6]);
});
