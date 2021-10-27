export async function async_for_each<T>(
  list: readonly T[],
  Fn: (item: T, index: number, original_list: readonly T[]) => Promise<any>
) {
  for (let i = 0; i < list.length; i++) {
    await Fn(list[i], i, list);
  }
  return list;
}
