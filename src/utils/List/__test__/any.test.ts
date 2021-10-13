import { any } from '../any';
import { lt } from '../../Logic/lt';

describe('any', () => {
  it('should return true when call any', () => {
    const result = any(lt(100), [111, 222, 333, 3333, 56, 112, 332]);
    expect(result).toBeTruthy();
  });

  it('should return false when call any', () => {
    const result = any(lt(100), [111, 112, 1123, 113, 516, 112, 132]);
    expect(result).toBeFalsy();
  });

  it('returns true when pass empty list', () => {
    const result = any(lt(100), []);
    expect(result).toBeFalsy();
  });
});
