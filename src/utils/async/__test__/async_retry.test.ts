import { async_retry } from '../async_retry';

it('should resolve promise', () => {
  let numbers = 0;
  function retry() {
    if (numbers > 4) {
      return Promise.resolve(numbers);
    } else {
      numbers++;
      return Promise.reject(numbers);
    }
  }
  expect(async_retry(retry)()).resolves.toBe(5);
});

it('should reject promise', () => {
  function retry() {
    return Promise.reject(0);
  }
  expect(async_retry(retry)()).rejects.toBe(0);
});
