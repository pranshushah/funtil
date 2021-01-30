import { find } from '../find';

it('should return given element', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const res = find(is_odd, [12, 14, 16, 112, 111, 24, 26]);
  expect(res).toBe(111);
});

it('should return undefined', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const res = find(is_odd, [12, 14, 16, 112, 24, 26]);
  expect(res).toBe(undefined);
});
