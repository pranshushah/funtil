/**
 * @description takes an array and predication function(which returns promise) and returns true if any of the predication returns true otherwise it will
 * @param arr array you want to `some` was called upon.
 * @param callback_fn this function will be called on every element of the array.
 * @example
 * ```typescript
 * async function isPremiumUser(userName:string):Promise<boolean>{
 *   let res = await fetch(`someUrlTocheckPremiumUser?name=${userName}`);
 *   let data =  await res.json();
 *   return data.isPremiumUser
 * }
 * let hasPremiumUser = await F.async_some(["pranshu_44","mit_123","sanket_69","kartik_99"],isPremiumUser) // true
 * ```
 */

export async function async_some<T>(
  arr: readonly T[],
  callback_fn: (value: T, index: number, arr: readonly T[]) => Promise<boolean>
) {
  for (let i = 0; i < arr.length; i++) {
    if (await callback_fn(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
