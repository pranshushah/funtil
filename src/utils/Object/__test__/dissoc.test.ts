import { dissoc } from '../dissoc';

it('checking dissoc', () => {
  const result = dissoc('x', { x: 33, y: 44 });
  expect(result).toEqual({ y: 44 });
});
