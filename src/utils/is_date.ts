export function is_date(x: any) {
  return x instanceof Date && x.getTime();
}
