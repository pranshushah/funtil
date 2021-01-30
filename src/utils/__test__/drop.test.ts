import { drop } from '../drop';

it('should remove first given elements from array', () => {
  const result = drop(3, [1, 2, 3, 4, 5]);
  expect(result).toEqual([4, 5]);
});
it('should remove first given elements from string', () => {
  const result = drop(3, 'pranshu');
  expect(result).toBe('nshu');
});

it('should return whole array if remove number is <0', () => {
  const result = drop(-3, [1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it('should return empty array if number is greater than array.length', () => {
  const result = drop(13, [1, 2, 3, 4, 5]);
  expect(result).toEqual([]);
});
