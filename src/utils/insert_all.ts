export function insert_all<T>(
  insert_index: number,
  elements: readonly T[],
  arr: readonly T[]
): T[] {
  return [
    ...arr.slice(0, insert_index),
    ...elements,
    ...arr.slice(insert_index, arr.length),
  ];
}
