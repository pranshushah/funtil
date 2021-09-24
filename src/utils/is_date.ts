/**
 * @description checks weather given element is date or not.
 * @category Function
 */
export function is_date(x: any) {
  return x instanceof Date && x.getTime();
}
