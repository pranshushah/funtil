export function unique<T>(arr: T[]) {
  return arr.filter((val, index) => arr.indexOf(val) === index);
}
