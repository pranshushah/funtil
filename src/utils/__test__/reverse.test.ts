import { reverse } from '../reverse';

it('works with array', () => {
  expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

it('works string', () => {
  expect(reverse('pranshu')).toBe('uhsnarp');
});
