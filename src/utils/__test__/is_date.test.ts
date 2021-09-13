import { is_date } from '../is_date';

it('should work with all types', function() {
  expect(is_date(arguments)).toBeFalsy();
  expect(is_date(function() {})).toBeFalsy();
  expect(is_date([])).toBeFalsy();
  expect(is_date({})).toBeFalsy();
  expect(is_date(3)).toBeFalsy();
  expect(is_date('pranshu')).toBeFalsy();
  expect(is_date(null)).toBeFalsy();
  expect(is_date(undefined)).toBeFalsy();
  expect(is_date(new Date())).toBeTruthy();
});
