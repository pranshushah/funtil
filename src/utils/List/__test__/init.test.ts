import { init } from '../init';

it('checking with array', () => {
  let arr = [1, 2, 3, 4];
  let result = init(arr);
  expect(result.length).toBe(arr.length - 1);
  expect(result).toEqual([1, 2, 3]);
  result = init([]);
  expect(result.length).toBe(0);
  expect(result).toEqual([]);
});

it('should work with string', () => {
  let str = 'pranshu';
  let result = init(str);
  expect(result.length).toBe(str.length - 1);
  expect(result).toBe('pransh');
  result = init('');
  expect(result).toBe('');
  expect(result.length).toBe(0);
});
