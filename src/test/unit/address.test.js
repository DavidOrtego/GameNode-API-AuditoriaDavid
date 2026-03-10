const { isValidAddress } = require('../../utils/address');

describe('Utils: address', () => {
  test('should return true for a normal address string', () => {
    expect(isValidAddress('123 Main St, Springfield')).toBe(true);
  });

  test('should trim whitespace and still validate', () => {
    expect(isValidAddress('  456 Elm St  ')).toBe(true);
  });

  test('should return false for empty string or only spaces', () => {
    expect(isValidAddress('')).toBe(false);
    expect(isValidAddress('   ')).toBe(false);
  });

  test('should return false for non-string values', () => {
    expect(isValidAddress(null)).toBe(false);
    expect(isValidAddress(undefined)).toBe(false);
    expect(isValidAddress(12345)).toBe(false);
    expect(isValidAddress({})).toBe(false);
  });

  test('should return false for strings longer than 255 characters', () => {
    const long = 'a'.repeat(256);
    expect(isValidAddress(long)).toBe(false);
  });
});
