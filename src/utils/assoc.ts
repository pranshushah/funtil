export function assoc<T, U extends object, K extends string | number>(
  prop: K,
  val: T,
  obj: U
): Record<K, T> & U {
  return { ...obj, [prop]: val } as Record<K, T> & U;
}
