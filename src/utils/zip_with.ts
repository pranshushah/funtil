export function zip_with<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R,
  list1: T1[],
  list2: T2[]
) {
  let result: R[] = [];
  const length = Math.min(list1.length, list2.length);
  for (let index = 0; index < length; index++) {
    result.push(fn(list1[index], list2[index]));
  }
  return result;
}
