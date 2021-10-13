import { any_pass } from '../any_pass';
import { gt } from '../gt';
import { lt } from '../lt';
import { mod } from '../../math/mod';

it('should return true when call any_pass', () => {
  const isOdd = (x: number) => {
    return mod(2, x) === 1;
  };
  const result = any_pass([isOdd, gt(0), lt(100)])(144);
  expect(result).toBeTruthy();
});

it('should return false when call any_pass', () => {
  const isOdd = (x: number) => {
    return mod(2, x) === 1;
  };
  const result = any_pass([isOdd, gt(0)])(-4);
  expect(result).toBeFalsy();
});

it('returns true when pass empty list of predicate function', () => {
  const result = any_pass([])();
  expect(result).toBeFalsy();
});
