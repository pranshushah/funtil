/**
 * @description if given promises does not resolves in given time it throws error.
 * @param x Promise you want timeout.
 * @param timeout value of timeout in milisecond.
 * @example
 * ```typescript
 * try{
 * 
 *  let res = await F.async_timeout(
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    10000
    );
    console.log(res) // if reques does resolve in 10000 ms it log the response.
 * }catch(e){
   conosle.error(e) // if request does not resolve in 10000 ms it will thorw error.
 }
 * ```
 */
export async function async_timeout<T>(x: Promise<T>, timeout: number) {
  function waitForTime(ms: number) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`request did not resolve in ${ms} milisecond`));
      }, ms);
    });
  }
  return (await Promise.race([waitForTime(timeout), x])) as Promise<T>;
}
