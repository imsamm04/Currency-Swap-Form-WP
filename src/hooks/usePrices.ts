import { useState, useEffect, useCallback } from 'react';
import type { PriceData } from '../types';
import { priceService } from '../services/priceService';

export const usePrices = () => {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const priceData = await priceService.fetchPrices();
      setPrices(priceData);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch prices');
    } finally {
      setLoading(false);
    }
  }, []);

  const getPrice = useCallback((symbol: string): number | null => {
    return priceService.getPrice(symbol);
  }, []);

  const getPriceInUSD = useCallback((symbol: string, amount: number): number | null => {
    return priceService.getPriceInUSD(symbol, amount);
  }, []);

  const calculateExchangeRate = useCallback((fromSymbol: string, toSymbol: string): number | null => {
    return priceService.calculateExchangeRate(fromSymbol, toSymbol);
  }, []);

  const calculateSwapOutput = useCallback((
    fromSymbol: string,
    toSymbol: string,
    inputAmount: number,
    slippage: number = 0.5
  ) => {
    return priceService.calculateSwapOutput(fromSymbol, toSymbol, inputAmount, slippage);
  }, []);

  const hasPrice = useCallback((symbol: string): boolean => {
    return priceService.hasPrice(symbol);
  }, []);

  const getAvailableTokens = useCallback((): string[] => {
    return priceService.getAvailableTokens();
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPrices();
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchPrices]);

  return {
    prices,
    loading,
    error,
    lastUpdated,
    fetchPrices,
    getPrice,
    getPriceInUSD,
    calculateExchangeRate,
    calculateSwapOutput,
    hasPrice,
    getAvailableTokens,
  };
};
