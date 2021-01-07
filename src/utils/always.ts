export function always<T>(x: T) {
  return function() {
    return x;
  };
}
