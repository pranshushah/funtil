import { all } from '../all';
import { lt } from '../../lt';

describe('all', () => {
  it('should return true when call all', () => {
    const result = all(lt(100), [1, 2, 3, 3, 56, -112, -32]);
    expect(result).toBeTruthy();
  });

  it('should return false when call all', () => {
    const result = all(lt(100), [1, 2, 3, 3, 56, 112, -32]);
    expect(result).toBeFalsy();
  });

  it('returns true when pass empty list', () => {
    const result = all(lt(100), []);
    expect(result).toBeTruthy();
  });
});
