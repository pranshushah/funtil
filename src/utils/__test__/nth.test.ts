import { nth } from '../nth';

it('should work with array', () => {
  let result: any = nth(-1, [1, 2, 3]);
  expect(result).toBe(2);
  result = nth(33, [1, 2, 3]);
  expect(result).toBe(undefined);
  result = nth(2, [1, 2, 3]);
  expect(result).toBe(3);
});

it('should work with string', () => {
  let result: any = nth(-1, 'pranshu');
  expect(result).toBe('r');
  result = nth(33, 'pranshu');
  expect(result).toBe('');
  result = nth(2, 'pranshu');
  expect(result).toBe('a');
});
