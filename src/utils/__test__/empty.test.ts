import { empty } from '../empty';

it('should return empty array if we pass the array', () => {
  const result = empty([1, 2, 3, 4]);
  expect(result).toEqual([]);
});

it('should return empty string if we pass the array', () => {
  const result = empty('pranshu');
  expect(result).toBe('');
});

it('should return empty array if we pass the array', () => {
  const result = empty({ name: 'pranshu' });
  expect(result).toEqual({});
});
