import { prop_set } from '../prop_set';

it('should work with 3 args', () => {
  let result = prop_set({ id: 22, todo: 'doing stuff' }, 'author', 'pranshu');
  expect(result).toHaveProperty('author');
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('todo');
});

it('should work with 2 args', () => {
  let authorGetter = prop_set({ id: 22, todo: 'doing stuff' }, 'author');
  let result = authorGetter('pranshu');
  expect(result).toHaveProperty('author');
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('todo');
});

it('should work with 2 args', () => {
  let mergeObj = { author: 'pranshu' };
  let authorGetter = prop_set({
    id: 22,
    todo: 'doing stuff',
  });
  let result = authorGetter('author', 'pranshu');
  expect(result).toHaveProperty('author');
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('todo');
  let valueGetter = authorGetter<typeof mergeObj>('author');
  result = valueGetter('pranshu');
  expect(result).toHaveProperty('author');
  expect(result).toHaveProperty('id');
  expect(result).toHaveProperty('todo');
});
