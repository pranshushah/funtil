import { async_map } from './async_map';

/**
 * @description takes an array and predication function(which returns promise) and returns an array for which predication function returns true.all the predication functions are being evaluate in parallel but the final result will be same as original array.
 * @param arr array you want to filter
 * @param predicate_fn filter function
 *
 */

export async function async_filter<T>(
  arr: readonly T[],
  predicate_fn: (value: T, index: number, arr: readonly T[]) => Promise<boolean>
) {
  const result: T[] = [];
  await async_map(arr, async function main(value, index, array) {
    if (await predicate_fn(value, index, array)) {
      result.push(value);
    }
  });
  return result;
}
