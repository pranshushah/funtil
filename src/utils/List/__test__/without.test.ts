import { without } from '../without';

it('should have all the object with given id', () => {
  let result = without(
    [
      { id: 11, name: 'pranshu' },
      { id: 11, name: 'pranshu shah' },
    ],
    [
      { id: 11, name: 'pranshu' },
      { id: 12, name: 'mit desai' },
      { id: 13, name: 'sanket patel' },
      { id: 11, name: 'pranshu shah' },
    ]
  );
  expect(result).toEqual([
    { id: 12, name: 'mit desai' },
    { id: 13, name: 'sanket patel' },
  ]);
});

it('should return all the product that is shoe', () => {
  let shoeRemoval = without([
    { category: 'shoe', name: 'nike' },
    { category: 'shoe', name: 'adidas' },
  ]);
  let result = shoeRemoval([
    { category: 'shoe', name: 'nike' },
    { category: 'shoe', name: 'adidas' },
    { category: 'bat', name: 'puma' },
    { category: 'shorts', name: 'reebok' },
  ]);
  expect(result).toEqual([
    { category: 'bat', name: 'puma' },
    { category: 'shorts', name: 'reebok' },
  ]);
});
