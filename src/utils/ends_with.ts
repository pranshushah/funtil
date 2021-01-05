import { take_last } from './take_last';
import equal from 'fast-deep-equal';
export function ends_with<T>(suffix: T[], xs: T[]): boolean;
export function ends_with(suffix: string, xs: string): boolean;

export function ends_with<T>(suffix: T[] | string, xs: T[] | string) {
  if (Array.isArray(xs)) {
    return equal(take_last(suffix.length, xs), suffix);
  } else {
    return equal(take_last(suffix.length, xs), suffix);
  }
}
