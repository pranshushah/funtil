import { complement } from '../complement';
import { lt } from '../lt';

it('creates boolean-returning function that reverses another', () => {
  const isEven = complement(function(x: number) {
    return x % 2 === 1;
  });
  expect(isEven(11)).toBe(false);
  expect(isEven(10)).toBe(true);
});

it('should work with overloaded arguments', () => {
  let invertedLessThan30 = complement(lt(30));
  expect(invertedLessThan30(25)).toBe(false);
});
