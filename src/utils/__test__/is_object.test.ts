import { is_object } from '../is_object';

it('should work with all datatype', function() {
  expect(is_object([])).toBe(true);
  expect(is_object({})).toBe(true);
  expect(is_object(new Map())).toBe(true);
  expect(is_object(new Date())).toBe(true);
  expect(is_object(() => {})).toBe(false);
  expect(is_object(function x() {})).toBe(false);
  expect(is_object('')).toBe(false);
  expect(is_object(33)).toBe(false);
  expect(is_object(new Set())).toBe(true);
});
