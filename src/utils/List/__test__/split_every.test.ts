import { split_every } from '../split_every';

it('should work with 2 args', () => {
  let result: any = split_every(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  result = split_every(3, 'pranshu');
  expect(result).toEqual(['pra', 'nsh', 'u']);
});

it('should work with 1 args', () => {
  let groupOfThree = split_every(3);
  let result: any = groupOfThree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  result = groupOfThree('pranshu');
  expect(result).toEqual(['pra', 'nsh', 'u']);
});
