export function take_while_last<T>(
  predicate_fn: (arg: T) => boolean,
  xs: T[]
): T[];
export function take_while_last(
  predicate_fn: (arg: string) => boolean,
  xs: string
): string;

export function take_while_last<T>(
  predicate_fn: (arg: T | string) => boolean,
  xs: T[] | string
) {
  let last_index = xs.length - 1;
  while (last_index >= 0 && predicate_fn(xs[last_index])) {
    last_index--;
  }
  return xs.slice(last_index + 1, xs.length);
}
