const { calculateDiscount, calculatePriceWithTax } = require('../../utils/priceUtils');

describe('Utils: priceUtils', () => {

  describe('calculateDiscount', () => {
    
    test('You should apply a 20% discount to a price of 50', () => {
      expect(calculateDiscount(50, 20)).toBe(40);
    });

    test('You should apply a 100% discount to a price of 80', () => {
      expect(calculateDiscount(80, 100)).toBe(0);
    });

    test('You should apply a 0% discount to a price of 100', () => {
      expect(calculateDiscount(100, 0)).toBe(100);
    });

    test('You should round the final price to 2 decimals', () => {
      expect(calculateDiscount(59.99, 15)).toBe(50.99);
    });

    test('You should return null for negative price', () => {
      expect(calculateDiscount(-50, 20)).toBeNull();
    });

    test('You should return null for negative discount percentage', () => {
      expect(calculateDiscount(50, -20)).toBeNull();
    });

    test('You should return null for discount percentage greater than 100', () => {
      expect(calculateDiscount(50, 120)).toBeNull();
    });
  });

  describe('calculatePriceWithTax', () => {
    
    test('You should apply a 21% tax to a price of 100', () => {
      expect(calculatePriceWithTax(100)).toBe(121);
    });

    test('You should apply a 10% tax to a price of 50', () => {
      expect(calculatePriceWithTax(50, 10)).toBe(55);
    });

    test('You should round the final price to 2 decimals', () => {
      expect(calculatePriceWithTax(59.99, 15)).toBe(68.99);
    });

    test('You should return null for negative price', () => {
      expect(calculatePriceWithTax(-50)).toBeNull();
    });

    test('You should return null for negative tax percentage', () => {
      expect(calculatePriceWithTax(50, -10)).toBeNull();
    });
  });
  
});

