/**
 * wrapper around  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite| Number.isFinite()}
 * @category Function
 */
export function is_finite(x: any) {
  return Number.isFinite(x);
}
