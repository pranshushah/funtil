import { for_each } from '../List';
/**
 * @description takes an array and mapper function that returns a promise and returns an array with mapped values.all the element in array are passed to the mapper functions in parallel but the final result will be same as original array.
 * @param arr array you want to map.
 * @param fn  function that will map the given element to the new element.
 */

export async function async_map<T, V>(
  arr: readonly T[],
  fn: (value: T, index: number, arr: readonly T[]) => Promise<V>
) {
  const max_parallel = 6;
  let result: V[] = [];
  let valuesAndIndex: [T, number][] = [];
  for_each(function main(val, index) {
    valuesAndIndex.push([val, index]);
  }, arr);
  async function runner() {
    while (valuesAndIndex.length > 0) {
      const [val, index] = valuesAndIndex.pop()!;
      result[index] = await fn(val, index, arr);
    }
  }
  let parallel_promises = [];
  for (let i = 0; i < max_parallel; i++) {
    parallel_promises.push(runner());
  }
  await Promise.all(parallel_promises);
  return result;
}
