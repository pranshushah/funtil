/**
 * wrapper around  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite| Number.isFinite()}
 */
export function is_infinite(x: any) {
  return !Number.isFinite(x);
}
