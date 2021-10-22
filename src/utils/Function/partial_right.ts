/**
 * @description This method is like F.partial except that partially applied arguments are appended to the arguments it receives.type inference is not working as expected so you have to explicitly type genereic i hope we resolve this issue in up coming version.
 * @category Function
 * @example
 * ```typescript
 * async function postFetch(url:string,body={}:object){
 *    let res = await fetch(url,{
 *      method:"POST",
 *      mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return await res.json();
 * }
  let postRequestFromUser = F.partial_right<[object],[string],typeof postFetch>(postFetch,{
    user:localStorage.getItem("id"),
    authId:localStorage.getItem("authId")
  })
  postRequestFromUser("addTodos")
 * ```
 */
export function partial_right<
  P1 extends unknown[],
  P2 extends unknown[],
  F extends (...args: [...P2, ...P1]) => any
>(fn: F, ...intialArgs: P1): (...afterargs: P2) => ReturnType<F> {
  return function partially_applied(...afterargs: P2) {
    return fn(...afterargs, ...intialArgs);
  };
}
