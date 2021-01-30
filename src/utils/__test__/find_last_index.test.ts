import { find_last_index } from '../find_last_index';

it('should return given index', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const index = find_last_index(is_odd, [12, 14, 16, 112, 111, 24, 26, 23]);
  expect(index).toBe(7);
});

it('should return -1', () => {
  function is_odd(x: number) {
    return x % 2 === 1;
  }
  const index = find_last_index(is_odd, [12, 14, 16, 112, 1112, 24, 26, 238]);
  expect(index).toBe(-1);
});
