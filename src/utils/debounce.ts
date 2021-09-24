/**
 * @description Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 * @param fn function you want to debounce
 * @param wait elapsed time
 * @param immediate if immediate is true it invokes at leading end otherwise it invokes at trailing end.for more info please check out this [link.]{@link https://css-tricks.com/debouncing-throttling-explained-examples/}
 * @category Function
 */
export function debounce<F extends (...args: any[]) => any>(
  fn: F,
  wait: number,
  immediate: boolean = false
) {
  let timeout: NodeJS.Timeout | null = null;
  return function(...args: Parameters<F>) {
    const later = function() {
      timeout = null;
      if (!immediate) {
        fn(...args);
      }
    };
    let call_now = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    if (call_now) {
      fn(...args);
    }
  };
}
