import { includes } from '../includes';

it('for nonprimitive type', () => {
  let n1 = [{ x: 11 }, { x: 22 }];
  let result = includes({ x: 11 }, n1);
  expect(result).toBe(true);
  let n2 = [[1, 23], [11]];
  result = includes([11], n2);
  expect(result).toBe(true);
  let n3 = [
    [1, 2],
    [3, 4],
  ];
  let x = includes([1, 2]);
  let r1 = x(n3);
  let r2 = x([[1], [3]]);
  expect(r1).toBe(true);
  expect(r2).toBe(false);
});

it('for primitive type', () => {
  let zeroChecker = includes(0);
  let r1 = zeroChecker([1, 2, 3]);
  let r2 = zeroChecker([0, 1, -2]);
  expect(r1).toBe(false);
  expect(r2).toBe(true);
});
