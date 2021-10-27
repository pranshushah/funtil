export function async_delay<T>(delay: number, x?: T): Promise<T | undefined> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, delay);
  });
}
