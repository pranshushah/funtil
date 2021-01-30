import { difference } from '../difference';

it('should work with primitive type array.', () => {
  const result = difference([1, 2, 3, 4, 5], [1, 3, 5, 7]);
  expect(result).toEqual([2, 4]);
});

it('should work with reference type array.', () => {
  const res = difference(
    [{ name: 'pranshu' }, { name: 'mit' }, { name: 'jeet' }],
    [{ name: 'pranshu' }, { name: 'meet' }, { name: 'jit' }, { name: 'jeet' }]
  );
  expect(res).toEqual([{ name: 'mit' }]);
});
