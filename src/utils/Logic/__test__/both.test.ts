import { both } from '../both';
import { gt } from '../gt';
import { lt } from '../lt';

it('should returns true when you call function that returned from both', () => {
  const gt10 = gt(10);
  const lt50 = lt(50);
  const bool = both(gt10, lt50)(11);
  expect(bool).toBe(true);
});

it('should returns true when you call function that returned from both', () => {
  const gt10 = gt(10);
  const lt50 = lt(50);
  const bool = both(gt10, lt50)(111);
  expect(bool).toBe(false);
});
