import { identity } from './identity';
import { uniq_by } from './uniq_by';

export function unique<T>(arr: T[]) {
  return uniq_by(identity, arr);
}
