import { from_pair } from '../from_pair';

it('should return object from pair of array', () => {
  const obj = from_pair([
    ['name', 'pranshu'],
    ['hobbies', ['cricket', 'hokey']],
  ]);
  expect(obj).toEqual({ name: 'pranshu', hobbies: ['cricket', 'hokey'] });
});
