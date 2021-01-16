import { apply } from '../apply';

it('it spreads the arguments for given function', () => {
  const array_min = apply(Math.min);
  const result = array_min([-1, -11, 1, 4, 3]);
  expect(result).toBe(-11);
});
