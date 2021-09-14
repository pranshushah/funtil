import { is_match } from '../is_match';

it('checking with object type', () => {
  let result = is_match({ id: '4rde' }, { hello: 'pranshu', id: '4rde' });
  expect(result).toBe(true);
  result = is_match({ id: '11' }, { hello: 'pranshu', id: '4rde' });
  expect(result).toBe(false);
});
