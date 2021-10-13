import { reduce_right } from '../reduce_right';

function stringCombiner(acc: string, element: string) {
  return acc + element;
}
it('should work with 3args', () => {
  let result = reduce_right(stringCombiner, '', ['0', '1', '2', '3']);
  expect(result).toBe('3210');
});

it('should work with 2 args', () => {
  let arrayGetter = reduce_right(stringCombiner, '');
  let result = arrayGetter(['0', '1', '2', '3']);
  expect(result).toBe('3210');
});

it('should work with 1 args', () => {
  let arrayAndStringGetter = reduce_right(stringCombiner);
  let result = arrayAndStringGetter('', ['0', '1', '2', '3']);
  expect(result).toBe('3210');
  let arrayGetter = arrayAndStringGetter('');
  result = arrayGetter(['0', '1', '2', '3']);
  expect(result).toBe('3210');
});
