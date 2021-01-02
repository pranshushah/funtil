export function constant<T>(v: T) {
  return function value() {
    return v;
  };
}
