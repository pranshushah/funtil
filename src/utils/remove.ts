export function remove<T>(start: number, delete_count: number, arr: T[]): T[] {
  let result: T[] = arr.slice(0);
  result.splice(start, delete_count);
  return result;
}
