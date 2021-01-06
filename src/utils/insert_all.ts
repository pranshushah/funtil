export function insert_all<T>(
  insert_index: number,
  element: T[],
  arr: readonly T[]
): T[] {
  return [
    ...arr.slice(0, insert_index),
    ...element,
    ...arr.slice(insert_index, arr.length),
  ];
}
