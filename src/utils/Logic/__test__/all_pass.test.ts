import { all_pass } from '../all_pass';
import { gt } from '../gt';
import { lt } from '../lt';
import { mod } from '../../math/mod';

it('should return true when call all_pass', () => {
  const isOdd = (x: number) => {
    return mod(2, x) === 1;
  };
  const result = all_pass([isOdd, gt(0), lt(100)])(33);
  expect(result).toBeTruthy();
});

it('should return false when call all_pass', () => {
  const isOdd = (x: number) => {
    return mod(2, x) === 1;
  };
  const result = all_pass([isOdd, gt(0), lt(100)])(34);
  expect(result).toBeFalsy();
});

it('returns true when pass empty list of predicate function', () => {
  const result = all_pass([])();
  expect(result).toBeTruthy();
});
