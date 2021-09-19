import { prop_or } from '../prop_or';

it('should 3 args', () => {
  let result = prop_or('mit', { id: '11', author: 'pranshu' }, 'author');
  expect(result).toBe('pranshu');
  result = prop_or('mit', { id: '11', author: '' }, 'author');
  expect(result).toBe('mit');
});

it('should work with 2 args', () => {
  let keyGetter = prop_or(33, { id: '11', author: 'pranshu' });
  let result = keyGetter('author');
  expect(result).toBe('pranshu');
  keyGetter = prop_or('mit', { id: '11', author: 'pranshu' });
  result = keyGetter('author');
  expect(result).toBe('mit');
});

it('should work with 1 args', () => {
  let objGetter = prop_or('mit');
  let keyGetter = objGetter({ id: '11', author: 'pranshu' });
  let result = keyGetter('author');
  expect(result).toBe('pranshu');
  result = objGetter({ id: '11', author: '' }, 'author');
  expect(result).toBe('mit');
});
