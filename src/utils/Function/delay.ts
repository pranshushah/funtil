import { partial2 } from '../internals/partial2';
import { OvarloadedParameters, OverloadedReturnType } from '../types';

/**
 * @description invokes the given function after given time,also works with parital form.
 * @returns function that exectues passed function after given time.
 * @category Function
 * @example
 * function greet(name){
 *    alert(`Welcome ${name}!`)
 * }
 * delayedGreet = F.delay(greet,200)
 * delayedGreet("pranshu")
 */
export function delay<T extends (...args: any[]) => any>(
  fn: T,
  time: number
): (...args: OvarloadedParameters<T>) => OverloadedReturnType<T>;

export function delay<T extends (...args: any[]) => any>(
  fn: T
): (
  time: number
) => (...args: OvarloadedParameters<T>) => OverloadedReturnType<T>;

export function delay<T extends (...args: any[]) => any>(fn: T, time?: number) {
  return partial2(
    function main(fn, time) {
      return function(...args: OvarloadedParameters<T>) {
        setTimeout(() => {
          fn(...args);
        }, Math.abs(time));
      };
    },
    fn,
    time
  );
}
