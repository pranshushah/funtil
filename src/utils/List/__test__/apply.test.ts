import { apply } from '../apply';
import { lte } from '../../Logic/lte';

it('it spreads the arguments for given function', () => {
  const array_min = apply(Math.min);
  const result = array_min([-1, -11, 1, 4, 3]);
  expect(result).toBe(-11);
});

it('should work with overloaded functions', () => {
  let array_lte = apply(lte);
  expect(array_lte([3, 4])).toBe(false);
});
