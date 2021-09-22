import { gt } from '../gt';
import { times } from '../times';

it('should work with 2 args', () => {
  let result = times(gt(2), 5);
  expect(result).toEqual([false, false, false, true, true]);
});

it('should work with 2 args', () => {
  let timesGetter = times(gt(2));
  let result = timesGetter(5);
  expect(result).toEqual([false, false, false, true, true]);
});
