import { gt } from '../../Logic/gt';
import { try_catch } from '../try_catch';

function catcher(x: Error) {
  return x.message;
}
it('should work with 2 args', () => {
  let try_f = try_catch(gt, catcher);
  let result = try_f([[1, 2], []]);
  expect(result).toBe(true);
  expect(typeof try_f([[1], []])).toBe('function');
});

it('should work with 1 args', () => {
  let addCatch = try_catch(function() {
    throw Error('error');
  });
  let try_f = addCatch(catcher);
  expect(try_f([[], []])).toBe('error');
});
