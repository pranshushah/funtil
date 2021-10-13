import { binary } from '../binary';

it('it should have only two arguments when you call the function passed in binary', () => {
  binary(function(x: any, y: any, z: any) {
    expect(arguments.length).toBe(2);
    expect(x).toBe(11);
    expect(y).toBe(22);
    expect(z).toBe(undefined);
  })(11, 22);
});
