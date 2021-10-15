import { is_empty } from '../is_empty';

it('should work if string,array and object is empty', function() {
  expect(is_empty([])).toBeTruthy();
  expect(is_empty({})).toBeTruthy();
  expect(is_empty(new Map())).toBeTruthy();
  expect(is_empty(new Set())).toBeTruthy();
  expect(is_empty('')).toBeTruthy();
  expect(is_empty(null)).toBeTruthy();
  expect(is_empty(undefined)).toBeTruthy();

  expect(is_empty(function() {})).toBeFalsy();
  expect(is_empty([1, 2, 3])).toBeFalsy();
  expect(is_empty(3)).toBeFalsy();
  expect(is_empty('pranshu')).toBeFalsy();
  expect(is_empty(new Date())).toBeFalsy();
});
