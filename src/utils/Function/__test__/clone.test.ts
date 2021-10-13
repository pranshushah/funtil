import { clone } from '../clone';

it('should deep copy given object.', () => {
  const x = { z: 1, y: 44 };
  const y = clone(x);
  expect(x).toEqual(y);
  expect(x).not.toBe(y);
});

it('should depp copy given array', () => {
  const x = [1, 2, 3, 5];
  const y = clone(x);
  expect(x).toEqual(y);
  expect(x).not.toBe(y);
});
