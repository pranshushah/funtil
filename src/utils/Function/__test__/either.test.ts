import { either } from '../either';

it('it should return true if any of the predication function returns true', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  function isBiggerThan100(x: number) {
    return x > 100;
  }
  const res_function = either(is_odd, isBiggerThan100);
  const result = res_function(1200);

  expect(result).toBe(true);
});

it('it should return false if none of the predication function returns true', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  function isBiggerThan100(x: number) {
    return x > 100;
  }
  const res_function = either(is_odd, isBiggerThan100);
  const result = res_function(12);

  expect(result).toBe(false);
});
