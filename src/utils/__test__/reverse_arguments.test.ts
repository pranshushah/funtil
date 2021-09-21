import { reverse_arguments } from '../reverse_arguments';

it('should work with passed function', () => {
  function nameGetter(name: string, age: number) {
    return `name is ${name} and age is ${age}`;
  }
  let reversedNameGetter = reverse_arguments(nameGetter);
  let result = reversedNameGetter(24, 'pranshu');
  expect(result).toBe('name is pranshu and age is 24');
});
