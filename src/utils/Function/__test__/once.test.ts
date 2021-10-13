import { once } from '../once';

it('checking with clousure', () => {
  let count = 0;
  function inc() {
    count++;
    return count;
  }
  let resultOnce = once(inc);
  expect(resultOnce()).toBe(1);
  expect(resultOnce()).toBe(1);
  expect(resultOnce()).toBe(1);
  expect(resultOnce()).toBe(1);
});
