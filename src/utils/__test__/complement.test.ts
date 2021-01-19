import { complement } from '../complement';

it('creates boolean-returning function that reverses another', () => {
  const isEven = complement(function(x: number) {
    return x % 2 === 1;
  });
  expect(isEven(11)).toBe(false);
  expect(isEven(10)).toBe(true);
});

it('multiple arguments', () => {
  const gt100 = complement(function(x: number, y: number) {
    return x + y < 100;
  });
  expect(gt100(100, 20)).toBe(true);
  expect(gt100(10, 20)).toBe(false);
});
