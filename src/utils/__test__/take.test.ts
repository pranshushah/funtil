import { take } from '../take';

it('should work with 2 args', () => {
  let result: any = take(3, [1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([1, 2, 3]);
  result = take(3, 'pranshu');
  expect(result).toEqual('pra');
});

it('should work with 1 arg', () => {
  let first3Getter = take(3);
  let result: any = first3Getter([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3]);
  result = first3Getter('pranshu');
  expect(result).toEqual('pra');
});
