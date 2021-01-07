import { slice } from './slice';

export function split_at<T>(index: number, xs: T[]): T[];
export function split_at(index: number, xs: string): string[];

export function split_at<T extends any[] | string>(index: number, xs: T) {
  if (Array.isArray(xs)) {
    return [slice(0, index, xs), slice(index, xs.length, xs)];
  } else {
    return [
      slice(0, index, xs as string),
      slice(index, xs.length, xs as string),
    ];
  }
}
