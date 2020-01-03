const second = require('.');

describe('second', () => {
  test('should return correct message', () => {
    const result = second();
    expect(result).toBe('Hello from second module');
  })
})