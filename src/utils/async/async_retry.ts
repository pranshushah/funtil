import { OvarloadedParameters, OverloadedReturnType } from '../types';
import { async_delay } from './async_delay';

export interface retryOptions {
  /**
   * number of times you attempt the calling the function. default value is 10.
   */
  maximumAttempts?: number;
  /**
   * if this value is provided it will wait for given milisecond berfore trying to call the function again.
   */
  delayInMs?: number;
}

/**
 * @description takes a function and optinal options object and returns a function, which will try to call our async function maximum attempts times(default **10**).if task is successful it will return that result and of task is not successful after all attempts it will throw error.
 * @param fn function you want call.
 * @param options
 * @returns
 */
export function async_retry<Fn extends (...args: any[]) => Promise<any>>(
  fn: Fn,
  options?: retryOptions
): (...args: OvarloadedParameters<Fn>) => OverloadedReturnType<Fn> | Error {
  //@ts-ignore
  return async function(...args: OvarloadedParameters<Fn>) {
    let maximumAttempts: number | undefined = 10,
      delayInMs;
    if (options) {
      ({
        maximumAttempts: maximumAttempts = 10,
        delayInMs: delayInMs,
      } = options);
    }
    let error: any = new Error(
      `function still throws after ${maximumAttempts} tries.`
    );
    for (let i = 0; i < maximumAttempts; i++) {
      try {
        return await fn(...args);
      } catch (err) {
        error = err;
      }
      if (delayInMs) {
        await async_delay(delayInMs);
      }
    }
    throw error;
  };
}
