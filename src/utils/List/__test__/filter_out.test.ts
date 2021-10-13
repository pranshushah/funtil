import { filter_out } from '../filter_out';

it('returns an array which has value that returns true in predication function', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const base = [1, 2, 3, 4, 5, 6];
  const result = filter_out(is_odd, base);
  expect(result).toEqual([2, 4, 6]);
  expect(base.length).toBe(6);
});
