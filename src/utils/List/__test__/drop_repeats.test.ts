import { drop_repeats } from '../drop_repeats';

it('should remove primitive duplicate items', () => {
  const result = drop_repeats([1, 2, 3, 4, 5, 6, 7, 1, 2, 3]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
it('should remove reference duplicate items', () => {
  const result = drop_repeats([
    { name: 'pranshu' },
    { name: 'mit' },
    { name: 'jeet' },
    { name: 'jeet' },
  ]);
  expect(result).toEqual([
    { name: 'pranshu' },
    { name: 'mit' },
    { name: 'jeet' },
  ]);
});
