import { head } from '../head';
it('should return first elemnt of array', () => {
  const res = head([1, 2, 3]);
  expect(res).toBe(1);
});

it('should return first char of string', () => {
  const res = head('pranshu');
  expect(res).toBe('p');
});
