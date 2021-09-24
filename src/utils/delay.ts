import { partial2 } from './internals/partial2';

/**
 * @description invokes the given function after given time,also works with parital form.
 * @param fn function you want to invoke
 * @param time wait time for that function in milisecond
 * @category Function
 */
export function delay<T extends (...args: any) => any>(
  fn: T,
  time: number
): (...args: Parameters<T>) => ReturnType<T>;

export function delay<T extends (...args: any) => any>(
  fn: T
): (time: number) => (...args: Parameters<T>) => ReturnType<T>;

export function delay<T extends (...args: any) => any>(fn: T, time?: number) {
  return partial2(
    function main(fn, time) {
      return function(...args: Parameters<T>) {
        setTimeout(() => {
          fn(...args);
        }, time);
      };
    },
    fn,
    time
  );
}
