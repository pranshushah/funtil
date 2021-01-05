export function take_last<T>(
  number_elements_you_want_from_behind: number,
  xs: T[]
): T[];

export function take_last<T>(
  number_elements_you_want_from_behind: number,
  xs: string
): string;

export function take_last<T>(
  number_elements_you_want_from_behind: number,
  xs: T[] | string
) {
  let first_index: number;
  if (
    number_elements_you_want_from_behind < 0 ||
    xs.length - number_elements_you_want_from_behind <= 0
  ) {
    first_index = 0;
  } else {
    first_index = xs.length - number_elements_you_want_from_behind;
  }

  if (Array.isArray(xs)) {
    return xs.slice(first_index, xs.length);
  } else {
    return xs.slice(first_index, xs.length);
  }
}
