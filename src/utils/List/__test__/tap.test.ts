import { tap } from '../List/tap';

it('should work with 2 args', () => {
  let number = 1;

  function logger(x: number) {
    number = number + x;
  }
  let result = tap(logger, 3);
  expect(result).toBe(3);
  expect(number).toBe(4);
});

it('should work with 1 args', () => {
  let number = 1;

  function logger(x: number) {
    number = number + x;
  }
  let passArgs = tap(logger);
  let result = passArgs(3);
  expect(result).toBe(3);
  expect(number).toBe(4);
});
