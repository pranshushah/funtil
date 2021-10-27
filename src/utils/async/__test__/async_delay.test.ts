import { async_delay } from '../async_delay';

it('should work with fake timers', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(async_delay(0, 33)).resolves.toBe(33);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 0);
  expect(async_delay(1000, 'pranshu')).resolves.toBe('pranshu');
  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

  jest.clearAllTimers();
});
