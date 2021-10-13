import { remove } from '../remove';

it('should work with 3 args', () => {
  let deleteArray = [1, 2, 3, 4, 5, 6];
  let result = remove(3, 2, deleteArray);
  expect(result).toEqual([1, 2, 3, 6]);
  expect(deleteArray.length).toBe(6);
  expect(result.length).toBe(4);
});

it('should work with 2 args', () => {
  let deleteArray = [1, 2, 3, 4, 5, 6];
  let takeDeleteArray = remove(3, 2);
  let result = takeDeleteArray(deleteArray);
  expect(result).toEqual([1, 2, 3, 6]);
  expect(deleteArray.length).toBe(6);
  expect(result.length).toBe(4);
});

it('should work with 1 args', () => {
  let deleteArray = [1, 2, 3, 4, 5, 6];
  let takeDeleteArrayAndIndex = remove(3);
  let takeDeleteArray = takeDeleteArrayAndIndex(2);
  let result = takeDeleteArray(deleteArray);
  expect(result).toEqual([1, 2, 3, 6]);
  expect(deleteArray.length).toBe(6);
  expect(result.length).toBe(4);
  result = takeDeleteArrayAndIndex(2, deleteArray);
  expect(deleteArray.length).toBe(6);
  expect(result.length).toBe(4);
});
