import { of } from '../of';

it('should create array for different types', () => {
  let result: any = of(3);
  expect(result[0]).toBe(3);
  result = of('pranshu');
  expect(result[0]).toBe('pranshu');
  result = of([1, 2]);
  expect(result).toEqual([[1, 2]]);
  result = of({ 1: 2 });
  expect(result).toEqual([{ 1: 2 }]);
});
