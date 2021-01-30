import { delay } from '../delay';
import { max } from '../max';

jest.useFakeTimers();

it('it should delay the execution of given function', () => {
  const max_of_1000 = max(100);
  const delayed = delay(max_of_1000, 1000);
  delayed(11);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
