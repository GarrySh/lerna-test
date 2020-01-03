const { app } = require('.');

describe('app', () => {
  test('should return correct message', () => {
    const result = app();
    expect(result).toBe('Hi from app');
  });
});
