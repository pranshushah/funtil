import { is_primitive } from '../is_primitive';

it('should work with all datatype', function() {
  expect(is_primitive([])).toBe(false);
  expect(is_primitive({})).toBe(false);
  expect(is_primitive(new Map())).toBe(false);
  expect(is_primitive(new Date())).toBe(false);
  expect(is_primitive(() => {})).toBe(false);
  expect(is_primitive('')).toBe(true);
  expect(is_primitive(33)).toBe(true);
  expect(is_primitive(null)).toBe(true);
  expect(is_primitive(undefined)).toBe(true);
  expect(is_primitive(false)).toBe(true);
  expect(is_primitive(true)).toBe(true);
  expect(is_primitive(Symbol('bar'))).toBe(true);
  expect(is_primitive(new Set())).toBe(false);
});
