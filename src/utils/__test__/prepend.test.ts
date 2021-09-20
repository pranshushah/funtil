import { prepend } from '../prepend';

it('should work with 2 args', () => {
  let result = prepend(2, [3, 4, 5]);
  expect(result).toEqual([2, 3, 4, 5]);
});

it('should work with 1 args', () => {
  let arrayGetter = prepend(2);
  let result = arrayGetter([3, 4, 5]);
  expect(result).toEqual([2, 3, 4, 5]);
});
