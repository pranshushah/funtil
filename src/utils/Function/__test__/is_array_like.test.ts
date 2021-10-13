import { is_array_like } from '../is_array_like';

it('should give correct result with all array type', function() {
  expect(is_array_like(arguments)).toBeTruthy();
  expect(is_array_like([])).toBeTruthy();
  expect(is_array_like('pranshu')).toBeTruthy();
  expect(is_array_like(function() {})).toBeFalsy();
  expect(is_array_like({})).toBeFalsy();
  expect(is_array_like(3)).toBeFalsy();
  expect(is_array_like(null)).toBeFalsy();
  expect(is_array_like(undefined)).toBeFalsy();
});
