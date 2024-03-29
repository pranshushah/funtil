/**
 * @description takes a function and returns the function that takes only first two argument of that function and calls that function
 * @category Function
 * @example
 * ```typescript
 * function triplets(a:number,b:number,c?:number)(){
 *    return [a,b,c];
 * }
 * let twins = F.binary(triplets);
 * twins(3,4) // [3,4,undefined]
 * ```
 */
export function binary<T1, T2, R>(
  fn: (arg1: T1, arg: T2, ...args: any[]) => R
): (arg1: T1, arg: T2) => R {
  return function two(arg1: T1, arg2: T2) {
    return fn(arg1, arg2);
  };
}
