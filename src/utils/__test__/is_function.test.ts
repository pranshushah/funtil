import { is_function } from '../is_function';

it('should work with all types', function() {
  expect(is_function(arguments)).toBeFalsy();
  expect(
    is_function(function x() {
      console.log('function');
    })
  ).toBeTruthy();
  expect(
    is_function(() => {
      console.log('function');
    })
  ).toBeTruthy();
  const x = () => {};
  expect(is_function(x)).toBeTruthy();
  expect(is_function([])).toBeFalsy();
  expect(is_function({})).toBeFalsy();
  expect(is_function(3)).toBeFalsy();
  expect(is_function(new Map())).toBeFalsy();
  expect(is_function(new Set())).toBeFalsy();
  expect(is_function('pranshu')).toBeFalsy();
  expect(is_function(null)).toBeFalsy();
  expect(is_function(undefined)).toBeFalsy();
});
