import { insert_all } from '../insert_all';
it('should work with all types of index number', () => {
  let result = insert_all(2, [3, 4], [1, 2, 5, 6]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  result = insert_all(11, [5, 6], [1, 2, 3, 4]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  result = insert_all(-1, [5, 6], [1, 2, 3, 4, 7]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  result = insert_all(-111, [3, 4], [0, 1, 2]);
  expect(result).toEqual([3, 4, 0, 1, 2]);
});
