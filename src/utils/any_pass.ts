import { Pred } from './types';

export function any_pass<T extends any[]>(preds: Pred<T>[]) {
  return function checker(...args: T) {
    let result = false;
    for (let index = 0; index < preds.length; index++) {
      if (preds[index](...args)) {
        result = true;
        break;
      }
    }
    return result;
  };
}
