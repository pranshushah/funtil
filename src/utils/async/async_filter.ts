import { async_map } from './async_map';

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
