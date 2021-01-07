export function map_accum<T1, T2, R>(
  fn: (acc: T1, val: T2) => [T1, R],
  acc: T1,
  list: readonly T2[]
): [T1, R[]] {
  let result: R[] = [];
  let tuple: [T1, R] = fn(acc, list[0]);
  result.push(tuple[1]);
  for (let index = 1; index < list.length; index++) {
    tuple = fn(tuple[0], list[index]);
    result[index] = tuple[1];
  }
  return [tuple[0], result];
}
