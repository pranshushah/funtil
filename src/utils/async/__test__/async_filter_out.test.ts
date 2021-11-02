import { async_filter_out } from '../async_filter_out';
import { range } from '../../List/range';
import { async_delay } from '../async_delay';

it('should work with async functions', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(
    async_filter_out(range(0, 5), val => {
      return async_delay(100, val % 2 === 0) as Promise<boolean>;
    })
  ).resolves.toEqual([1, 3]);
  jest.clearAllTimers();
});
