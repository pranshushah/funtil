import { find_last } from '../find_last';

it('should return given element', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const res = find_last(is_odd, [12, 14, 16, 112, 111, 24, 26, 23]);
  expect(res).toBe(23);
});

it('should return undefined', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const index = find_last(is_odd, [12, 14, 16, 112, 1112, 24, 26, 238]);
  expect(index).toBe(undefined);
});
