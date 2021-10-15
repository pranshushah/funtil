import { curry_strict } from '../curry_strict';

it('checking curry_strict', () => {
  function x(a: number, b: number, c: number) {
    return a + b + c;
  }
  const c = curry_strict(x);
  const c1 = c(1);
  const c2 = c1(2);
  const c3 = c2(3);
  expect(c3).toBe(6);
});
