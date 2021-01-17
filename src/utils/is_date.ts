/**
 * @description checks weather given element is date or not.
 */
export function is_date(x: any) {
  return x instanceof Date && x.getTime();
}
