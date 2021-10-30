/**
 * @description async function that resolves after given milisecond with value we provide.
 * @param delay time you want wait for your promise to resolve.(in milisecond.)
 * @param x value you want return with resolve function.
 * @returns Promise that resolves in given time.
 */
export function async_delay<T>(delay: number, x?: T): Promise<T | undefined> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, delay);
  });
}
