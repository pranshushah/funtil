export function map<T, R extends (val: T, index?: number, arr?: T[]) => any>(
  mapper: R,
  arr: T[]
) {
  let mappedArray: ReturnType<R>[] = [];
  for (let [index, val] of arr.entries()) {
    mappedArray.push(mapper(val, index, arr));
  }
  return mappedArray;
}
