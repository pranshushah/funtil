import { gt } from '../../Logic/gt';
import { add } from '../../math/add';
import { negate } from '../../math/negate';
import { pipe } from '../pipe';

it('checking with 3 pipe functions', () => {
  let result = pipe(add, negate, gt(10));
  expect(result(3, 5)).toBe(false);
});
