import { intersperse } from '../intersperse';

it('should add element between array', () => {
  let result = intersperse('x', ['1', '2', '3']);
  expect(result).toEqual(['1', 'x', '2', 'x', '3']);
  expect(result.length).toBe(5);
});
