import { async_for_each } from '../async_for_each';
import { async_delay } from '../async_delay';

it('should work with async funtion', async () => {
  let final_output: number[] = [];
  await async_for_each([1, 2, 3, 4], async value => {
    let val = await async_delay(0, value);
    if (val) {
      final_output.push(val);
    }
  });
  expect(final_output).toEqual([1, 2, 3, 4]);
});
