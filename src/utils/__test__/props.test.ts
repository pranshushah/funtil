import { props } from '../props';

it('should work with 2 args', () => {
  let result = props({ id: 22, todo: 'writing tests', author: 'pranshu' }, [
    'todo',
    'author',
  ]);
  expect(result).toEqual(['writing tests', 'pranshu']);
});

it('should work with 1 arg', () => {
  let tododDetailsGetter = props({
    id: 22,
    todo: 'writing tests',
    author: 'pranshu',
  });
  let result = tododDetailsGetter(['todo']);
  expect(result).toEqual(['writing tests']);
});
