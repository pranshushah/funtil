import { async_map } from './async_map';

/**
 * @description takes an array and predication function(which returns promise) and returns an array for which predication function returns false.all the predication functions are being evaluate in parallel but the final result will be same as original array.
 * @param arr array you want to filter
 * @param predicate_fn filter function
 * @example
 * ```typescript
 * async function isPremiumUser(userName:string):Promise<boolean>{
 *   let res = await fetch(`someUrlTocheckPremiumUser?name=${userName}`);
 *   let data =  await res.json();
 *   return data.isPremiumUser
 * }
 * let premiumUsers = await F.async_filter_out(["pranshu_44","mit_123","sanket_69","kartik_99"],isPremiumUser) // ["mit_123","kartik_99"]
 * ```
 */

export async function async_filter_out<T>(
  arr: readonly T[],
  predicate_fn: (value: T, index: number, arr: readonly T[]) => Promise<boolean>
) {
  const result: T[] = [];
  await async_map(arr, async function main(value, index, array) {
    let output = await predicate_fn(value, index, array);
    if (!output) {
      result.push(value);
    }
  });
  return result;
}
