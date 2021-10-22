/**
 * @description always returns the value that passed in argument.
 * @category Function
 * @example
 * ```typescript
 * let numbers = [1,2,3,4];
 * identity(numbers) // [1,2,3,4]
 * ```
 */
export function identity<T>(v: T): T {
  return v;
}
