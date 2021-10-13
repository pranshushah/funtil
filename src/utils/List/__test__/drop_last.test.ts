import { drop_last } from '../drop_last';

it('should remove first given elements from array', () => {
  const result = drop_last(3, [1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2]);
});
it('should remove first given elements from string', () => {
  const result = drop_last(3, 'pranshu');
  expect(result).toBe('pran');
});

it('should return whole array if remove number is <0', () => {
  const result = drop_last(-3, [1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

it('should return empty array if number is greater than array.length', () => {
  const result = drop_last(13, [1, 2, 3, 4, 5]);
  expect(result).toEqual([]);
});
