import { starts_with } from '../starts_with';

it('should work with 2 args ', () => {
  let result = starts_with('pra', 'pranshu');
  expect(result).toBe(true);
  result = starts_with([1, 2, 3], [1, 2, 3, 4, 5]);
  expect(result).toBe(true);
  result = starts_with([1, 2, 4], [1, 2, 3, 4, 5]);
  expect(result).toBe(false);
  result = starts_with('prn', 'pranshu');
  expect(result).toBe(false);
});

it('should work with 1 args ', () => {
  let stringStartChecker = starts_with('pra');
  expect(stringStartChecker('pranshu')).toBe(true);
  let arrayStartChecker = starts_with([1, 2, 3]);
  expect(arrayStartChecker([1, 2, 3, 4, 5])).toBe(true);
  expect(stringStartChecker('prnshu')).toBe(false);
  expect([1, 3, 4, 5]).toBe(false);
});
