/**
 * @description it is equivalent to es6 arr.flat(Infinity)
 * @category List
 * @example
 * ```typescript
 * F.flatten([1,2,3,[[4,5]]]) // [1,2,3,4,5]
 * F.flatten(1,2,3,[[[4]]]) // [1,2,3,4]
 * ```
 */
export function flatten<T>(arr: T[]) {
  return arr.flat(Infinity);
}
