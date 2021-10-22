/**
 * @description takes a function as argument and few arguments of that function and returns a function that takes rest of the argument. when you call returned function it invokes argument function with given arguments.
 * @category Function
 * @example
 * ```typescript
 * async function postFetch(url:string,body={}:object){
 *    let res = await fetch(url,{
 *      method:"POST",
 *      mode: 'cors',
 *       headers: {
 *         'Content-Type': 'application/json'
 *       },
 *       body: JSON.stringify(data)
 *     });
 *    return await res.json();
 * }
 * let addTodo = F.partial(postFetch,"addTodos");
 * await addTodo({id:1,text:"todo1",done:false,userId:123})
 * ```
 *
 */
export function partial<
  T1 extends readonly any[],
  T2 extends readonly any[],
  R
>(
  fn: (...args: [...T1, ...T2]) => R,
  ...intialArgs: T1
): (...afterargs: T2) => R {
  return function partially_applied(...afterargs: T2) {
    return fn(...intialArgs, ...afterargs);
  };
}
