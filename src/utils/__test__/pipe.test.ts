import { add } from '../math/add';
import { negate } from '../math/negate';
import { pipe } from '../pipe';

it('checking with 3 pipe functions', () => {
  let result = pipe(add, negate, Number.toString);
  expect(result(3, 5)).toBe('-8');
});
