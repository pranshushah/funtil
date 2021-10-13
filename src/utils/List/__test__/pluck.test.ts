import { pluck } from '../pluck';

it('should work with 2 args', () => {
  let names = pluck('name', [
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'nisarg' },
    { id: 3, name: 'sanket' },
    { id: 4, name: 'mit' },
  ]);
  expect(names).toEqual(['pranshu', 'nisarg', 'sanket', 'mit']);
});

it('should work with 1 arg', () => {
  let getNames = pluck('name');
  type obj = { id: string; name: string };
  let names = getNames<obj>([
    { id: '1', name: 'pranshu' },
    { id: '2', name: 'nisarg' },
    { id: '3', name: 'sanket' },
    { id: '4', name: 'mit' },
  ]);
  expect(names).toEqual(['pranshu', 'nisarg', 'sanket', 'mit']);
});
