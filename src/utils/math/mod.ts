export function mod(y: number) {
  return function forX(x: number) {
    return x % y;
  };
}
