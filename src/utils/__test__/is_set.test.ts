import { is_set } from '../is_set';

it('should work with all datatype', function() {
  expect(is_set([])).toBe(false);
  expect(is_set({})).toBe(false);
  expect(is_set(new Map())).toBe(false);
  expect(is_set(new Date())).toBe(false);
  expect(is_set(() => {})).toBe(false);
  expect(is_set('')).toBe(false);
  expect(is_set(33)).toBe(false);
  expect(is_set(new Set())).toBe(true);
});
