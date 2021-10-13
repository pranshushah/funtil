import { gt } from '../gt';

it('should return true if second is greater than first.', () => {
  const res = gt(33, 44);
  expect(res).toBe(true);
});

it('should return false if second is less than first.', () => {
  const res = gt(33, 24);
  expect(res).toBe(false);
});
