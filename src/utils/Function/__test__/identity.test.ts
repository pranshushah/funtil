import { identity } from '../identity';

it('checking for non primitive types', () => {
  let n1: any = { x: 1 };
  let result = identity(n1);
  expect(result).toBe(n1);
  n1 = [1, 2, 3];
  result = identity(n1);
  expect(result).toBe(n1);
  n1 = function x() {};
  result = identity(n1);
  expect(result).toBe(n1);
});

it('checking for primitive types', () => {
  let n1: any = 1;
  let result = identity(n1);
  expect(result).toBe(n1);
  n1 = 'pranshu';
  result = identity(n1);
  expect(result).toBe(n1);
  n1 = null;
  result = identity(n1);
  expect(result).toBe(n1);
  n1 = undefined;
  result = identity(n1);
  expect(result).toBe(n1);
});
