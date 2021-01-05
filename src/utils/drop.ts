export function drop<T>(n: number, xs: T[]): T[];
export function drop(n: number, xs: string): string;

export function drop<T>(number_element_to_drop: number, xs: T[] | string) {
  const start_index =
    Math.sign(number_element_to_drop) === -1 ? 0 : number_element_to_drop;
  return xs.slice(start_index, xs.length);
}
