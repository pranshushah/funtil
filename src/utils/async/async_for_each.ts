/**
 * @description same as `F.for_each()` but callback functions will be called asynchronously.
 * @param xs array you want to loop over.
 * @param Fn async function want call on every element.
 * @returns
 */
export async function async_for_each<T>(
  xs: readonly T[],
  Fn: (item: T, index: number, original_list: readonly T[]) => Promise<any>
) {
  for (let i = 0; i < xs.length; i++) {
    await Fn(xs[i], i, xs);
  }
  return xs;
}
