export function insert<T>(
  insert_index: number,
  element: T,
  arr: readonly T[]
): T[] {
  let return_arr = arr.slice(0, arr.length);
  return_arr.splice(insert_index, 0, element);
  return return_arr;
}
