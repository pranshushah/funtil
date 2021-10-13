import { merge_right } from '../merge_right';

it('should work 2 args', () => {
  let result = merge_right(
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' }
  );
  expect(result).toEqual({ id: '12', name: 'pranshu shah', task: 'woww' });
});

it('should work 1 arg', () => {
  let merger = merge_right({ id: '11', name: 'pranshu shah' });
  let result = merger({ id: '12', task: 'woww' });
  expect(result).toEqual({ id: '12', name: 'pranshu shah', task: 'woww' });
});
