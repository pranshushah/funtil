import { ends_with } from '../ends_with';

it('should return true if suffix is equal to end of the array', () => {
  const result = ends_with([1, 2, 3], [1, 22, 222, 333, 1, 2, 3]);
  expect(result).toBe(true);
});

it('should return false if suffix is not equal to end of the array', () => {
  const result = ends_with([1, 2, 333], [1, 22, 222, 333, 1, 2, 3]);
  expect(result).toBe(false);
});

it('should return true if suffix is equal to end of the string', () => {
  const result = ends_with('shu', 'pranshu');
  expect(result).toBe(true);
});

it('should return false if suffix is not equal to end of the string', () => {
  const result = ends_with('pra', 'pranshu');
  expect(result).toBe(false);
});
