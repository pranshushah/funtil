import { filter_in } from '../filter_in';

it('returns an array which has value that returns true in predication function', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const base = [1, 2, 3, 4, 5, 6];
  const result = filter_in(is_odd, base);
  expect(result).toEqual([1, 3, 5]);
  expect(base.length).toBe(6);
});
