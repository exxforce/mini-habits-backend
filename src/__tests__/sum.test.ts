import { sum } from '../sum';

describe('Testes das somas', () => {
  it('should 1 + 2 to be equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
