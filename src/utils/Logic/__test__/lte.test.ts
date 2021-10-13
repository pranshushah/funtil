import { lte } from '../lte';

it('should work with 2 numbers', () => {
  let result = lte(3, 4);
  expect(result).toBe(false);
  result = lte(3, 2);
  expect(result).toBe(true);
  result = lte(3, 3);
  expect(result).toBe(true);
});

it('should work with partial form', () => {
  let lessThanthreeOrEq = lte(3);
  expect(lessThanthreeOrEq(4)).toBe(false);
  expect(lessThanthreeOrEq(2)).toBe(true);
  expect(lessThanthreeOrEq(3)).toBe(true);
});
