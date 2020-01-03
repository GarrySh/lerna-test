const first = require('.');

describe('first', () => {
  test('should return correct message', () => {
    const result = first();
    expect(result).toBe('Hi from first module');
  })
})