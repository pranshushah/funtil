import { is_array } from '../is_array';
import { pair } from '../pair';

it('should works with 2 args', () => {
  let result = pair(33, 'pranshu');
  expect(is_array(result)).toBe(true);
  expect(result).toEqual([33, 'pranshu']);
});

it('should works with 1 arg', () => {
  let getString = pair(33);
  let result = getString('pranshu');
  expect(is_array(result)).toBe(true);
  expect(result).toEqual([33, 'pranshu']);
});
