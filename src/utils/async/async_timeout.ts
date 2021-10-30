/**
 * @description if given promises does not resolves in given time it throws error.
 * @param x Promise you want timeout.
 * @param timeout value of timeout in milisecond.
 * @returns
 */
export async function async_timeout<T>(x: Promise<T>, timeout: number) {
  function waitForTime(ms: number) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`request did not resolve in ${ms} milisecond`));
      }, ms);
    });
  }
  return await Promise.race([waitForTime(timeout), x]);
}
