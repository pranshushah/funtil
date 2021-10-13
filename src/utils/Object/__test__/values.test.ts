import { values } from '../values';

it('checking with all types of values', () => {
  let x = {
    id: 1,
    name: 'pranshu',
    getName() {
      return this.name;
    },
    33: 'hello',
    obj: {
      id: 1,
    },
  };
  let result = values(x);
  expect(result.length).toBe(5);
  expect(result).toContainEqual(1);
  expect(result).toContainEqual('hello');
  expect(result).toContainEqual('pranshu');
});
