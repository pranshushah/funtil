import { lt } from '../lt';
import { take_while } from '../take_while';

it('should work with 2 args', () => {
  let result: any = take_while(lt(33), [1, 2, 3, 33, 44, 55]);
  expect(result).toEqual([1, 2, 3, 33]);
  result = take_while(function(x: string) {
    return x.charCodeAt(0) > 100;
  }, 'pranshu');
  expect(result).toBe('pra');
});

it('should work with 1 arg', () => {
  let arrayGetter = take_while(lt(33));
  let result: any = arrayGetter([1, 2, 3, 33, 44, 55]);
  expect(result).toEqual([1, 2, 3, 33]);
  let stringGetter = take_while(function(x: string) {
    return x.charCodeAt(0) > 100;
  });
  result = stringGetter('pranshu');
  expect(result).toBe('pra');
});
