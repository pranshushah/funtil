import { omit } from '../omit';

it('checking for different', () => {
  let result = omit(
    {
      id: 'hello',
      name: 'pranshu',
      age: 'boom',
    },
    ['id', 'name']
  );
  expect(result).toEqual({ age: 'boom' });
  expect(result).not.toHaveProperty('id');
  expect(result).not.toHaveProperty('name');
});
