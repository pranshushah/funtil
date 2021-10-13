import { T } from '../T';

it('should always return true', () => {
  expect(T({})).toBe(true);
  expect(T('')).toBe(true);
  expect(T(3)).toBe(true);
  expect(T()).toBe(true);
});
