import { lt } from '../lt';

it('should work with 2 numbers', () => {
  let result = lt(3, 4);
  expect(result).toBe(false);
  result = lt(3, 2);
  expect(result).toBe(true);
});

it('should work with partial form', () => {
  let lessThanthree = lt(3);
  expect(lessThanthree(4)).toBe(false);
  expect(lessThanthree(2)).toBe(true);
});
