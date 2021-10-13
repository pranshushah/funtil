import { strict_curry } from '../curry_strict';

it('checking strict_curry', () => {
  function x(a: number, b: number, c: number) {
    return a + b + c;
  }
  const c = strict_curry(x);
  const c1 = c(1);
  const c2 = c1(2);
  const c3 = c2(3);
  expect(c3).toBe(6);
});
