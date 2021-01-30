/**
 * @description partial form of array.flatMap
 */
export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R, arr: T[]): any[];

export function flat_map<
  T extends any,
  R extends (val: T, index: number, arr: T[]) => any
>(mapper: R, arr: T[]) {
  return arr.flatMap(mapper);
}
