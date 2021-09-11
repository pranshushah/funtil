import { identical } from '../identical';

it('checking for primitive value', () => {
  let n1: any = 3;
  let n2: any = 3;
  let result = identical(n1, n2);
  expect(result).toBe(true);
  n1 = 'pranshu';
  n2 = 'pranshu';
  result = identical(n1, n2);
  expect(result).toBe(true);
  n1 = 'pranshu';
  n2 = 'pranshu';
  result = identical(n1, n2);
  expect(result).toBe(true);
  n1 = null;
  n2 = null;
  result = identical(n1, n2);
  expect(result).toBe(true);
  n1 = false;
  n2 = false;
  result = identical(n1, n2);
  expect(result).toBe(true);
  n1 = true;
  n2 = true;
  result = identical(n1, n2);
  expect(result).toBe(true);
  n1 = 'pranshu';
  n2 = 'hello';
  result = identical(n1, n2);
  expect(result).toBe(false);
  n1 = 32;
  n2 = 33;
  result = identical(n1, n2);
  expect(result).toBe(false);
  n1 = true;
  n2 = false;
  result = identical(n1, n2);
  expect(result).toBe(false);
});

it('checking for non primitive type', () => {
  function x() {}
  let result = identical(x, x);
  expect(result).toBe(true);
  result = identical([], []);
  expect(result).toBe(false);
  result = identical({}, {});
  expect(result).toBe(false);
  let n1: any = { x: 3 };
  result = identical(n1, n1);
  expect(result).toBe(true);
  n1 = [1];
  result = identical(n1, n1);
  expect(result).toBe(true);
});
