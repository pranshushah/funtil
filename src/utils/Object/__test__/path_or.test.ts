import { path_or } from '../path_or';

it('should work with 3 args', () => {
  let obj = { id: '1', profile: { name: 'pranshu' } };
  let result = path_or('mit', ['profile', 'name'], obj);
  expect(result).toBe('pranshu');
  let obj1 = { id: '1', profile: { name: null } };
  result = path_or('mit', ['profile', 'name'], obj1);
  expect(result).toBe('mit');
});

it('should work with 2 args', () => {
  let obj = { id: '1', profile: { name: 'pranshu' } };
  let obj1 = { id: '1', profile: { name: null } };
  let nameChecker = path_or('mit', ['profile', 'name']);
  let result = nameChecker(obj);
  expect(result).toBe('pranshu');
  result = nameChecker(obj1);
  expect(result).toBe('mit');
});

it('should work with 1 args', () => {
  let obj = { id: '1', profile: { name: 'pranshu' } };
  let obj1 = { id: '1', profile: { name: null } };
  let nameAndPathGetter = path_or('mit');
  let nameChecker = nameAndPathGetter(['profile', 'name']);
  let result = nameChecker(obj);
  expect(result).toBe('pranshu');
  result = nameChecker(obj1);
  expect(result).toBe('mit');
});
