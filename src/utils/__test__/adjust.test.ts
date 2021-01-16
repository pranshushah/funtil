import { adjust } from '../adjust';

it('should convert tan of given value at given index', () => {
  const arr2 = adjust(3, Math.tan, [1, 2, 3, 5, 6]);
  expect(arr2[3].toFixed()).toEqual('-3');
  expect(arr2.length).toBe(5);
});

it('should adjust last index if you provide negative index', () => {
  const arr2 = adjust(-3, Math.tan, [1, 2, 3, 5, 11]);
  expect(arr2[arr2.length - 1].toFixed()).toEqual('-226');
  expect(arr2.length).toBe(5);
});

it('should adjust last index if you provide index out of bound', () => {
  const arr2 = adjust(13, Math.tan, [1, 2, 3, 5, 11]);
  expect(arr2[arr2.length - 1].toFixed()).toEqual('-226');
  expect(arr2.length).toBe(5);
});

it('does not mutate original array', () => {
  const arr = [1, 2, 3, 5, 11];
  const arr2 = adjust(13, Math.tan, arr);
  expect(arr2).not.toEqual(arr);
});
