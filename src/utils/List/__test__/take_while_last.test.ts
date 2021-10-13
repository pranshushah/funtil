import { take_while_last } from '../take_while_last';
import { lt } from '../lt';

it('should work with 2 args', () => {
  let result: any = take_while_last(lt(33), [1, 2, 3, 33, 4, 5]);
  expect(result).toEqual([33, 4, 5]);
  result = take_while_last(function(x: string) {
    return x.charCodeAt(0) > 100;
  }, 'pranshu');
  expect(result).toBe('anshu');
});

it('should work with 1 arg', () => {
  let arrayGetter = take_while_last(lt(33));
  let result: any = arrayGetter([1, 2, 3, 33, 4, 5]);
  expect(result).toEqual([33, 4, 5]);
  let stringGetter = take_while_last(function(x: string) {
    return x.charCodeAt(0) > 100;
  });
  result = stringGetter('pranshu');
  expect(result).toBe('anshu');
});
