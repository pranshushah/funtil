import { async_map } from '../async_map';
import { range } from '../../List/range';
import { async_delay } from '../async_delay';

it('should work with async functions', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  expect(
    async_map(range(0, 5), val => {
      return async_delay(100, val * 2) as Promise<number>;
    })
  ).resolves.toEqual([0, 2, 4, 6, 8]);
  jest.clearAllTimers();
});
