export function adjust<T>(index: number, fn: (arg: T) => T, arr: readonly T[]) {
  const ret_array = arr.slice(0, arr.length);
  const main_index = index >= arr.length || index < 0 ? arr.length - 1 : index;

  for (let i = 0; i < arr.length; i++) {
    if (i === main_index) {
      ret_array[i] = fn(ret_array[i]);
      break;
    }
  }
  return ret_array;
}
