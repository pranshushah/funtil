import { is_map } from '../is_map';

it('should work with all datatype', function() {
  expect(is_map([])).toBe(false);
  expect(is_map({})).toBe(false);
  expect(is_map(new Map())).toBe(true);
  expect(is_map(new Date())).toBe(false);
  expect(is_map(() => {})).toBe(false);
  expect(is_map('')).toBe(false);
  expect(is_map(33)).toBe(false);
  expect(is_map(new Set())).toBe(false);
});
