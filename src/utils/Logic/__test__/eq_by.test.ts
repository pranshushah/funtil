import { eq_by } from '../eq_by';

it('should return true if function returns same value for given value', () => {
  function is_even(x: number) {
    return x % 2 === 0;
  }
  const result = eq_by(is_even, 100, 122);
  expect(result).toBe(true);
});

it('should return true if function returns same value for given value', () => {
  function is_even(x: number) {
    return x % 2 === 0;
  }
  const result = eq_by(is_even, 100, 123);
  expect(result).toBe(false);
});
