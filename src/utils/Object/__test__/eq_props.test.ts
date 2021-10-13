import { eq_props } from '../eq_props';

it('should return return true if both object for given key returns same value', () => {
  const xx = { name: 'pranshu' };
  const xxx = { age: 23, name: 'pranshu', last: 'shah' };
  const result = eq_props('name', xx, xxx);
  expect(result).toBe(true);
});

it('should return return true if both object for given key returns same value for refernce type', () => {
  const xx = { hobbies: ['cricket', 'football'] };
  const xxx = {
    age: 23,
    name: 'pranshu',
    last: 'shah',
    hobbies: ['cricket', 'football'],
  };
  const result = eq_props('hobbies', xx, xxx);
  expect(result).toBe(true);
});
it('should return return false if both object for given key does not returns same value', () => {
  const xx = { name: 'pranshu' };
  const xxx = { age: 23, name: 'mit', last: 'shah' };
  const result = eq_props('name', xx, xxx);
  expect(result).toBe(false);
});

it('should return return false if both object for given key does not returns same value for refernce type', () => {
  const xx = { hobbies: ['cricket', 'football'] };
  const xxx = {
    age: 23,
    name: 'pranshu',
    last: 'shah',
    hobbies: ['cricket', 'football', 'cooking'],
  };
  const result = eq_props('hobbies', xx, xxx);
  expect(result).toBe(false);
});
