import { drop_last_while } from '../drop_last_while';

function is_odd(x: number) {
  return x % 2 === 1;
}
it('should remove first given elements from array', () => {
  const result = drop_last_while(is_odd, [1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 2, 3, 4]);
});
it('should remove first given elements from string', () => {
  const result = drop_last_while((s: string) => s !== 'n', 'pranshu');
  expect(result).toBe('pran');
});
