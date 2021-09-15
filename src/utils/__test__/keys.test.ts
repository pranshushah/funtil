import { keys } from '../keys';

it('checking with all types of keys', () => {
  let x = {
    id: 1,
    name: 'pranshu',
    getName() {
      return this.name;
    },
    33: 'hello',
  };
  let result = keys(x);
  expect(result).toContainEqual('33');
  expect(result).toContainEqual('getName');
  expect(result).toContainEqual('name');
  expect(result).toContainEqual('id');
});
