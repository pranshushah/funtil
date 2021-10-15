import { max } from '../max';

it('should work with 2 args', () => {
  let result = max(1, 2);
  expect(result).toBe(2);
  result = max(1, Infinity);
  expect(result).toBe(Infinity);
  result = max(1, NaN);
  expect(result).toBe(NaN);
});

it('should work with 2 args', () => {
  let biggerThan1 = max(1);
  let result = biggerThan1(2);
  expect(result).toBe(2);
  result = biggerThan1(Infinity);
  expect(result).toBe(Infinity);
  result = biggerThan1(NaN);
  expect(result).toBe(NaN);
  result = biggerThan1(-Infinity);
  expect(result).toBe(1);
});
