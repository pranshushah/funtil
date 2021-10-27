import { async_delay } from '../async_delay';
import { async_timeout } from '../async_timeout';

it('should resolve the promise', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(async_timeout(async_delay(1000, 33), 3000)).resolves.toBe(33);
  expect(async_timeout(async_delay(10000, 45), 1000)).rejects.toMatch('error');
  jest.clearAllTimers();
});
