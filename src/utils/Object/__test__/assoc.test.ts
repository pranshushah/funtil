import { assoc } from '../assoc';

it('makes shallow copy of object and adds or overrides given prop val', () => {
  const result = assoc('hello', 'pranshu', { x: 1, y: 5 });
  expect(result).toEqual({ x: 1, y: 5, hello: 'pranshu' });

  const result1 = assoc('x', 11, { x: 1, y: 5 });
  expect(result1).toEqual({ x: 11, y: 5 });
});
