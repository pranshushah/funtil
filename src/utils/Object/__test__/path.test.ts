import { path } from '../path';

it('should work with 2 args', () => {
  let obj = { id: '1', profile: { name: 'pranshu' } };
  let obj1 = { id: '1', profile: { name: null } };
  let result = path<typeof obj, string>(['profile', 'name'], obj);
  expect(result).toBe('pranshu');
  result = path<typeof obj1, string>(['profile', 'name'], obj1);
  expect(result).toBe(null);
});

it('should work with 1 args', () => {
  let obj = { id: '1', profile: { name: 'pranshu' } };
  let obj1 = { id: '1', profile: { name: null } };
  let nameChecker = path(['profile', 'name']);
  let result = nameChecker(obj);
  expect(result).toBe('pranshu');
  result = nameChecker(obj1);
  expect(result).toBe(null);
});
