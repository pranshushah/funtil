/**
 *
 * @param fn function you want to throttle.
 * @param wait throttling time
 * @param immediate if immediate is true it invokes at leading end otherwise it invokes at trailing end.for more info please check out this [link.]{@link https://css-tricks.com/debouncing-throttling-explained-examples/}
 * @category Function
 *
 */
export function throttle<F extends (...args: any[]) => any>(
  fn: F,
  wait: number,
  immediate: boolean = true
) {
  let in_throttle: NodeJS.Timeout | null = null;
  return function(...args: Parameters<F>) {
    function later() {
      in_throttle = null;
      if (!immediate) {
        fn(...args);
      }
    }
    let call_now = immediate && !in_throttle;
    if (!in_throttle) {
      if (call_now) {
        fn(...args);
        in_throttle = setTimeout(() => {
          in_throttle = null;
        }, wait);
      } else {
        in_throttle = setTimeout(() => {
          later();
        }, wait);
      }
    }
  };
}
