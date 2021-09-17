import { merge_left } from '../merge_left';

it('should work 2 args', () => {
  let result = merge_left(
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' }
  );
  expect(result).toEqual({ id: '11', name: 'pranshu shah', task: 'woww' });
});

it('should work 1 arg', () => {
  let merger = merge_left({ id: '11', name: 'pranshu shah' });
  let result = merger({ id: '12', task: 'woww' });
  expect(result).toEqual({ id: '11', name: 'pranshu shah', task: 'woww' });
});
