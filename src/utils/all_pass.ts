import { Pred } from './types';

export function all_pass<T extends any[]>(preds: Pred<T>[]) {
  return function checker(...args: T) {
    let result = true;
    for (let index = 0; index < preds.length; index++) {
      if (!preds[index](...args)) {
        result = false;
        break;
      }
    }
    return result;
  };
}
