import { flat_map } from '../flat_map';

it('should fatten and mapped the array', () => {
  const base = ['it’s always', 'sunny in', ' philadelphia'];
  const res = flat_map((x: string) => x.split(' '), base);
  expect(res).toEqual(['it’s', 'always', 'sunny', 'in', '', 'philadelphia']);
});
