import { concat } from '../concat';

it('concats two array and returns new array', () => {
  const list1 = [1, 2, 3, 5];
  const list2 = [1, 2, 444, 44];
  const result = concat(list1, list2);
  expect(list1.length).toBe(4);
  expect(result.length).toBe(8);
  expect(result).not.toBe(list1); // to check that its not returning it original array.
  expect(result[list1.length]).toBe(1);
});

it('concats two string and returns new string', () => {
  const first = 'pranshu';
  const last = 'shah';
  const name = concat(first, last);
  expect(name.length).toBe(11);
  expect(name[first.length]).toBe('s');
});
