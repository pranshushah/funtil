import { to_pairs } from '../to_pairs';

it('should work with object', () => {
  let result = to_pairs({
    id: 111,
    name: 'pranshu',
    getName() {
      return 'pranshu';
    },
  });
  expect(result.length).toBe(3);
  expect(result[0]).toEqual(['id', 111]);
  expect(result[1]).toEqual(['name', 'pranshu']);
});
