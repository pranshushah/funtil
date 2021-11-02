import { range } from '../../List';
import { async_delay } from '../async_delay';
import { async_some } from '../async_some';

it('should true', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(
    async_some(range(0, 5), val => {
      return async_delay(100, val % 2 == 0) as Promise<boolean>;
    })
  ).resolves.toBe(true);
  jest.clearAllTimers();
});

it('should true', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(
    async_some(range(0, 5), val => {
      return async_delay(100, val % 9 === 0) as Promise<boolean>;
    })
  ).resolves.toBe(false);
  jest.clearAllTimers();
});
