import { identity } from '../Function/identity';
import { uniq_by } from './uniq_by';

/**
 * @description returns unique value of array.it uses `F.equals` for equality.
 * @category List
 * @example
 * F.unique([{ id: 1, name: 'pranshu' },{ id: 2, name: 'mit' },{ id: 1, name: 'pranshu' }]);
 * // [{ id: 1, name: 'pranshu' },{ id: 2, name: 'mit' }]
 */
export function unique<T>(arr: T[]) {
  return uniq_by(identity, arr);
}
