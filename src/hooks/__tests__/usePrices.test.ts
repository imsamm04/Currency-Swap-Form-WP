
import { renderHook, act } from '@testing-library/react';
import { usePrices } from '../usePrices';
import { vi } from 'vitest';

vi.mock('../../services/priceService', () => ({
  priceService: {
    fetchPrices: vi.fn().mockResolvedValue([{ symbol: 'BTC', price: 10000 }]),
    getPrice: vi.fn().mockReturnValue(10000),
    getPriceInUSD: vi.fn().mockReturnValue(10000),
    calculateExchangeRate: vi.fn().mockReturnValue(2),
    calculateSwapOutput: vi.fn().mockReturnValue({ outputAmount: 20000 }),
    hasPrice: vi.fn().mockReturnValue(true),
    getAvailableTokens: vi.fn().mockReturnValue(['BTC', 'ETH']),
  },
}));

describe('usePrices', () => {
  it('should fetch prices on mount', async () => {
    const { result } = renderHook(() => usePrices());
    await act(async () => {
      await result.current.fetchPrices();
    });
    expect(result.current.prices.length).toBeGreaterThan(0);
    expect(result.current.error).toBeNull();
  });

  it('should get price for symbol', () => {
    const { result } = renderHook(() => usePrices());
    expect(result.current.getPrice('BTC')).toBe(10000);
  });
});
