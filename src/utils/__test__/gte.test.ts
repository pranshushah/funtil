import { gte } from '../gte';

it('should return true if second is greater than first.', () => {
  const res = gte(33, 44);
  expect(res).toBe(true);
});

it('should return false if second is less than first.', () => {
  const res = gte(33, 24);
  expect(res).toBe(false);
});

it('should return false if second is equal to  first.', () => {
  const res = gte(33, 33);
  expect(res).toBe(true);
});
