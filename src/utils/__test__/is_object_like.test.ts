import { is_object_like } from '../is_object_like';

it('should work with all datatype', function() {
  expect(is_object_like([])).toBe(false);
  expect(is_object_like({})).toBe(true);
  expect(is_object_like(new Map())).toBe(false);
  expect(is_object_like(new Date())).toBe(true);
  expect(is_object_like(() => {})).toBe(false);
  expect(is_object_like(function x() {})).toBe(false);
  expect(is_object_like('')).toBe(false);
  expect(is_object_like(33)).toBe(false);
  expect(is_object_like(new Set())).toBe(false);
});
