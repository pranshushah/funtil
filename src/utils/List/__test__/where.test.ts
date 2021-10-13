import { where } from '../where';

it('should have all the object with given id', () => {
  let result = where({ id: 11 }, [
    { id: 11, name: 'pranshu' },
    { id: 12, name: 'mit desai' },
    { id: 13, name: 'sanket patel' },
    { id: 11, name: 'pranshu shah' },
  ]);
  expect(result).toEqual([
    { id: 11, name: 'pranshu' },
    { id: 11, name: 'pranshu shah' },
  ]);
});

it('should return all the product that is shoe', () => {
  let shoeFinder = where({ category: 'shoe' });
  let result = shoeFinder([
    { category: 'shoe', name: 'nike' },
    { category: 'shoe', name: 'adidas' },
    { category: 'bat', name: 'puma' },
    { category: 'shorts', name: 'reebok' },
  ]);
  expect(result).toEqual([
    { category: 'shoe', name: 'nike' },
    { category: 'shoe', name: 'adidas' },
  ]);
});
