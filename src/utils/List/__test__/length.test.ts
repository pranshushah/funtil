import { length } from '../length';

it('should work with array', () => {
  let result: any = length([1, 2, 3, 4]);
  expect(result).toBe(4);
  result = length([]);
  expect(result).toBe(0);
  result = length([{ x: 1 }, { x: 2 }, { x: 3 }]);
  expect(result).toBe(3);
});

it('should work with string', () => {
  let result = length('hello');
  expect(result).toBe(5);
  result = length('');
  expect(result).toBe(0);
  result = length('hello ');
  expect(result).toBe(6);
});
