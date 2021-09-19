import { pick } from '../pick';

it('should work with 2 args', () => {
  let result = pick(['id', 'name'], { id: '123', name: 'pranshu', age: 22 });
  expect(typeof result).toBe('object');
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('name');
  expect(result).not.toHaveProperty('age');
});

it('should work with 1 args', () => {
  let grabIdAndName = pick(['id', 'name']);
  let result = grabIdAndName({ id: '123', name: 'pranshu', age: 22 });
  expect(typeof result).toBe('object');
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('name');
  expect(result).not.toHaveProperty('age');
});
