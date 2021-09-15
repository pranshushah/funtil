import { last } from '../last';

it('should work with array', () => {
  let result: any = last([1, 2, 3, 4]);
  expect(result).toBe(4);
  result = last([]);
  expect(result).toBe(undefined);
  result = last([{ x: 1 }, { x: 2 }, { x: 3 }]);
  expect(result).toEqual({ x: 3 });
});

it('should work with string', () => {
  let result = last('hello');
  expect(result).toBe('o');
  result = last('');
  expect(result).toBe('');
  result = last('hello ');
  expect(result).toBe(' ');
});
