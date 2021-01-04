export function map<T, R extends (val: T, index?: number, arr?: T[]) => any>(
  mapper: R,
  arr: T[]
) {
  return arr.flatMap(mapper);
}
