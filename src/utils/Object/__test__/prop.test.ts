import { prop } from '../prop';

it('should work with 2 args', () => {
  let result = prop({ id: 22, todo: 'writing tests' }, 'todo');
  expect(result).toBe('writing tests');
});

it('should work with 1 arg', () => {
  let tododDetailsGetter = prop({ id: 22, todo: 'writing tests' });
  let result = tododDetailsGetter('todo');
  expect(result).toBe('writing tests');
});
