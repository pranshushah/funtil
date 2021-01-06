export function prepend<T>(el: T, arr: T[]) {
  return [el, ...arr];
}
