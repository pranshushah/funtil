import { merge_all } from '../merge_all';

it('checking merge_all', () => {
  let result = merge_all([
    { id: '11', name: 'pranshu shah' },
    { id: '12', task: 'woww' },
    { id: '13', name: 'zoom' },
  ]);
  expect(result).toEqual({ id: '13', name: 'zoom', task: 'woww' });
});
