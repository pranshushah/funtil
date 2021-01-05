import { drop } from './drop';

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
  const drop_elements =
    number_elements_you_want_from_behind >= 0
      ? xs.length - number_elements_you_want_from_behind
      : 0;
  if (Array.isArray(xs)) {
    return drop(drop_elements, xs);
  } else {
    return drop(drop_elements, xs);
  }
}
