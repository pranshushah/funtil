/**
 * @description returns an array containing value that was passed in function.
 * @category List
 * @example
 * ```typescript
 * F.of(33) // [33]
 * F.of("pranshu") // ["pranshu"]
 * F.of({id:11,name:"pranshu"}) // [{id:11,name:"pranshu"}]
 * ```
 */
export function of<T>(x: T): [T] {
  return [x];
}
