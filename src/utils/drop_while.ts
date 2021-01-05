export function drop_while<T>(predicate_fn: (arg: T) => boolean, xs: T[]): T[];
export function drop_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function drop_while<T>(
  predicate_fn: (arg: T | string) => boolean,
  xs: T[] | string
) {
  let first_index = 0;
  while (first_index < xs.length && predicate_fn(xs[first_index])) {
    first_index++;
  }
  return xs.slice(first_index, xs.length);
}
