import { unary } from '../unary';

function takesTwoArgs(x: number, y?: number): [number, number | undefined] {
  return [x, y];
}

it('should work with all types of args', () => {
  let oneArgFunc = unary(takesTwoArgs);
  expect(oneArgFunc(43)).toEqual([43, undefined]);
});
