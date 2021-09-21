import { repeat } from '../repeat';

it('should work with primitive type', () => {
  let result = repeat('pranshu', 3);
  expect(result).toEqual(['pranshu', 'pranshu', 'pranshu']);
});

it('should work with object type', () => {
  let result = repeat({ id: 1, name: 'pranshu' }, 3);
  expect(result).toEqual([
    { id: 1, name: 'pranshu' },
    { id: 1, name: 'pranshu' },
    { id: 1, name: 'pranshu' },
  ]);
  expect(result[0]).toBe(result[1]);
});
