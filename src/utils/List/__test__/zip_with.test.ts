import { zip_with } from '../zip_with';

it('should work with 3 args', () => {
  function concate(x: number, y: string) {
    return x + y;
  }
  let result = zip_with(concate, [1, 2, 3, 4], ['1', '2']);
  expect(result).toEqual(['11', '22']);
});

it('should work with 2 args', () => {
  function concate(x: number, y: string) {
    return x + y;
  }
  let getStringArray = zip_with(concate, [1, 2, 3, 4]);
  let result = getStringArray(['1', '2']);
  expect(result).toEqual(['11', '22']);
});

it('should work with 1 args', () => {
  function concate(x: number, y: string) {
    return x + y;
  }
  let getArrays = zip_with(concate);
  let result = getArrays([1, 2, 3, 4], ['1', '2']);
  expect(result).toEqual(['11', '22']);
  let getStringArray = getArrays([1, 2, 3, 4]);
  result = getStringArray(['1', '2']);
  expect(result).toEqual(['11', '22']);
});
