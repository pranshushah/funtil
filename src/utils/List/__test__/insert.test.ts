import { insert } from '../insert';

it('should insert item at given index', () => {
  let result = insert(2, 3, [1, 2, 4]);
  expect(result).toEqual([1, 2, 3, 4]);
  result = insert(-1, 5, [1, 2, 4, 6]);
  expect(result).toEqual([1, 2, 4, 5, 6]);
  result = insert(-11, 0, [1, 2, 4, 6]);
  expect(result).toEqual([0, 1, 2, 4, 6]);
  result = insert(11, 7, [1, 2, 4, 6]);
  expect(result).toEqual([1, 2, 4, 6, 7]);
});
