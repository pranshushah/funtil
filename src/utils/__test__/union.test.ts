import { union } from '../union';

it('it should work with 2 args', () => {
  let result: any = union([1, 2, 3], [1, 2, 'pranshu']);
  expect(result).toEqual([1, 2, 3, 'pranshu']);
  result = union(
    [
      { id: 1, name: 'pranshu' },
      { id: 2, name: 'mit' },
      { id: 3, name: 'sanket' },
    ],
    [
      { id: 1, name: 'pranshu' },
      { id: 5, name: 'harsh' },
    ]
  );
  expect(result).toEqual([
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'mit' },
    { id: 3, name: 'sanket' },
    { id: 5, name: 'harsh' },
  ]);
});

it('it should work with 1 args', () => {
  let arrayGetter = union([1, 2, 3]);
  let result: any = arrayGetter([4, 5, 6, 1]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  let arrayGetter2 = union([
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'mit' },
    { id: 3, name: 'sanket' },
  ]);
  result = arrayGetter2([
    { id: 1, name: 'pranshu' },
    { id: 5, name: 'harsh' },
  ]);
  expect(result).toEqual([
    { id: 1, name: 'pranshu' },
    { id: 2, name: 'mit' },
    { id: 3, name: 'sanket' },
    { id: 5, name: 'harsh' },
  ]);
});
