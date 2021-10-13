import { is_array } from '../is_array';

it('should give correct result with all array type', function() {
  expect(is_array(arguments)).toBeFalsy();
  expect(is_array(function() {})).toBeFalsy();
  expect(is_array([])).toBeTruthy();
  expect(is_array({})).toBeFalsy();
  expect(is_array(3)).toBeFalsy();
  expect(is_array('pranshu')).toBeFalsy();
  expect(is_array(null)).toBeFalsy();
  expect(is_array(undefined)).toBeFalsy();
});
