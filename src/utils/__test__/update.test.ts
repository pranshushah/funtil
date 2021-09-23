import { update } from '../update';

it('should work with 3 args', () => {
  let arr = [1, 2, 3, 4];
  let result = update(2, 22, arr);
  arr.push(23);
  expect(result).toEqual([1, 2, 22, 4]);
  expect(arr).toEqual([1, 2, 3, 4, 23]);
});

it('should work with 2 args', () => {
  let arr = [1, 2, 3, 4];
  let arrGetter = update(2, 22);
  let result = arrGetter(arr);
  arr.push(23);
  expect(result).toEqual([1, 2, 22, 4]);
  expect(arr).toEqual([1, 2, 3, 4, 23]);
});

it('should work with 1 args', () => {
  let arr = [1, 2, 3, 4];
  let arrAndNumberGetter = update(2);
  let result = arrAndNumberGetter(22, arr);
  expect(result).toEqual([1, 2, 22, 4]);
  arr.push(23);
  expect(arr).toEqual([1, 2, 3, 4, 23]);
  arr.pop();
  let arrGetter = arrAndNumberGetter(22);
  result = arrGetter(arr);
  expect(result).toEqual([1, 2, 22, 4]);
});
