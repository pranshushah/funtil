import { join } from '../join';

it('should work with number and string type', () => {
  let result = join('.', [1, 2, 3, 4]);
  expect(result).toBe('1.2.3.4');
  result = join(' ', ['p', 'r', 'a']);
  expect(result).toBe('p r a');
});
