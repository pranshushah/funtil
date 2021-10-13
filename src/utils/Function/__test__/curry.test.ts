import { curry } from '../curry';

it('curries a single value', () => {
  function x(a: number, b: number, c: number) {
    return a + b + c;
  }
  const c = curry(x);
  const r = c(1, 2, 3);
  expect(r).toBe(6);
});

it('curries a multiple value', () => {
  function x(a: number, b: number, c: number) {
    return a + b + c;
  }
  const c = curry(x);
  const r1 = c(1, 2);
  const r = r1(3);
  expect(r).toBe(6);
});
