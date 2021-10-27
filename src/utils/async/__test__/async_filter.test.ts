import { async_filter } from '../async_filter';
import { range } from '../../List/range';
import { async_delay } from '../async_delay';

it('should work with async functions', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(
    async_filter(range(0, 5), val => {
      return async_delay(100, val % 2 == 0) as Promise<boolean>;
    })
  ).resolves.toEqual([0, 2, 4]);
  jest.clearAllTimers();
});
