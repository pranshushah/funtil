import { concat } from '../../List/concat';
import { flip } from '../flip';

it('should filp the first two argument', () => {
  const flipped_concat = flip(concat);
  const res = flipped_concat('pranshu', 'shah');
  expect(res).toBe('shahpranshu');
});
