import { find_index } from '../find_index';

it('should return given index', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const index = find_index(is_odd, [12, 14, 16, 112, 111, 24, 26]);
  expect(index).toBe(4);
});

it('should return -1', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const index = find_index(is_odd, [12, 14, 16, 112, 24, 26]);
  expect(index).toBe(-1);
});
