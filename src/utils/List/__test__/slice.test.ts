import { slice } from '../slice';

it('should work with 3 args', () => {
  let result: any = slice(0, 3, [1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3]);
  result = slice(0, 2, 'pranshu');
  expect(result).toBe('pr');
});

it('should work with 2 args', () => {
  let arraySlicer = slice(0, 3);
  let result: any = arraySlicer([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3]);
  result = arraySlicer('pranshu');
  expect(result).toBe('pra');
});

it('should work with 1 args', () => {
  let endIndexGetter = slice(0);
  let arraySlicer = endIndexGetter(3);
  let result: any = arraySlicer([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3]);
  result = endIndexGetter(3, 'pranshu');
  expect(result).toBe('pra');
});
