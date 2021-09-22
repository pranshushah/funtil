import { take_last } from '../take_last';
it('should work with 2 args', () => {
  let result: any = take_last(3, [1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([4, 5, 6]);
  result = take_last(3, 'pranshu');
  expect(result).toEqual('shu');
});

it('should work with 1 arg', () => {
  let first3Getter = take_last(3);
  let result: any = first3Getter([1, 2, 3, 4, 5]);
  expect(result).toEqual([3, 4, 5]);
  result = first3Getter('pranshu');
  expect(result).toEqual('shu');
});
