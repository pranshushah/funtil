import { scan } from '../scan';

function stringCombiner(acc: string, element: string) {
  return acc + element;
}
it('should work with 3args', () => {
  let result = scan(stringCombiner, '', ['0', '1', '2', '3']);
  expect(result).toEqual(['', '0', '01', '012', '0123']);
});

it('should work with 2 args', () => {
  let arrayGetter = scan(stringCombiner, '');
  let result = arrayGetter(['0', '1', '2', '3']);
  expect(result).toEqual(['', '0', '01', '012', '0123']);
});

it('should work with 1 args', () => {
  let arrayAndStringGetter = scan(stringCombiner);
  let result = arrayAndStringGetter('', ['0', '1', '2', '3']);
  expect(result).toEqual(['', '0', '01', '012', '0123']);
  let arrayGetter = arrayAndStringGetter('');
  result = arrayGetter(['0', '1', '2', '3']);
  expect(result).toEqual(['', '0', '01', '012', '0123']);
});
