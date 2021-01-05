export function take_while<T>(predicate_fn: (arg: T) => boolean, xs: T[]): T[];
export function take_while(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function take_while<T>(
  predicate_fn: (arg: T | string) => boolean,
  xs: T[] | string
) {
  let last_index = 0;
  while (last_index < xs.length && predicate_fn(xs[last_index])) {
    last_index++;
  }
  return xs.slice(0, last_index + 1);
}
