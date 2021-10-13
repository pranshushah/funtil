import { min } from '../math/min';

it('should work with 2 args', () => {
  let result = min(1, 2);
  expect(result).toBe(1);
  result = min(1, Infinity);
  expect(result).toBe(1);
  result = min(1, NaN);
  expect(result).toBe(1);
});

it('should work with 2 args', () => {
  let lesserThan1 = min(1);
  let result = lesserThan1(2);
  expect(result).toBe(1);
  result = lesserThan1(Infinity);
  expect(result).toBe(1);
  result = lesserThan1(NaN);
  expect(result).toBe(1);
  result = lesserThan1(-Infinity);
  expect(result).toBe(-Infinity);
});
