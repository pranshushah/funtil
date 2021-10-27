import { OvarloadedParameters, OverloadedReturnType } from '../types';
import { async_delay } from './async_delay';

type retryOptions = {
  maximumAttempts?: number;
  delayInMs?: number;
};

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
