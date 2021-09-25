import { identity } from './identity';
import { uniq_by } from './uniq_by';

/**
 * @description returns unique value of array.it uses `F.equals` for equality.
 * @category List
 */
export function unique<T>(arr: T[]) {
  return uniq_by(identity, arr);
}
