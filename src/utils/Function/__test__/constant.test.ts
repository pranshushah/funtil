import { constant } from '../constant';

it('checking constant function', () => {
  const x = { a: 2, b: 4 };
  const c = constant(x);
  expect(c()).toBe(x);
});
