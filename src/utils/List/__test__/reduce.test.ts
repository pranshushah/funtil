import { reduce } from '../reduce';

function stringCombiner(acc: string, element: string) {
  return acc + element;
}
it('should work with 3args', () => {
  let result = reduce(stringCombiner, '', ['0', '1', '2', '3']);
  expect(result).toBe('0123');
});

it('should work with 2 args', () => {
  let arrayGetter = reduce(stringCombiner, '');
  let result = arrayGetter(['0', '1', '2', '3']);
  expect(result).toBe('0123');
});

it('should work with 1 args', () => {
  let arrayAndStringGetter = reduce(stringCombiner);
  let result = arrayAndStringGetter('', ['0', '1', '2', '3']);
  expect(result).toBe('0123');
  let arrayGetter = arrayAndStringGetter('');
  result = arrayGetter(['0', '1', '2', '3']);
  expect(result).toBe('0123');
});
