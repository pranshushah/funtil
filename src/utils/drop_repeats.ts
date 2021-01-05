export function drop_repeats<T>(arr: T[]) {
  return arr.filter((val, index) => arr.indexOf(val) === index);
}
