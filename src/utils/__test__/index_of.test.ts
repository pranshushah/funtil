import { index_of } from '../index_of';

it('checking for primitive type', () => {
  let findOne = index_of(1);
  let result = findOne([1, 2, 3, 4]);
  expect(result).toBe(0);
  result = findOne([2, 3, 4]);
  expect(result).toBe(-1);
  result = index_of('pranshu', ['hello', 'hi', 'i', 'am', 'pranshu']);
  expect(result).toBe(4);
  result = index_of('pranshu', ['hello', 'woow']);
  expect(result).toBe(-1);
});

it('checking for non primitive type', () => {
  let findObj = index_of({ id: 1 });
  let result = findObj([{ id: 1 }, { id: 11 }, { id: 21 }]);
  expect(result).toBe(0);
  result = findObj([{ id: 11 }, { id: 21 }]);
  expect(result).toBe(-1);
});
