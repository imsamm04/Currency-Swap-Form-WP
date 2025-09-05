import { useState, useCallback, useMemo } from 'react';
import type { Token, SwapFormData, SwapQuote, SwapError, ValidationError } from '../types';
import { usePrices } from './usePrices';
import { validateSwapForm, validatePriceImpact } from '../utils/validation';
import { formatNumber } from '../utils/formatting';
import { DEFAULT_SLIPPAGE } from '../constants/tokens';

export const useSwap = () => {
  const { calculateSwapOutput, getPriceInUSD } = usePrices();
  
  const [formData, setFormData] = useState<SwapFormData>({
    fromToken: null,
    toToken: null,
    fromAmount: '',
    toAmount: '',
    slippage: DEFAULT_SLIPPAGE,
  });

  const [quote, setQuote] = useState<SwapQuote | null>(null);
  const [error, setError] = useState<SwapError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate quote when form data changes
  const calculateQuote = useCallback(async () => {
    if (!formData.fromToken || !formData.toToken || !formData.fromAmount) {
      setQuote(null);
      return;
    }

    const amount = parseFloat(formData.fromAmount);
    if (isNaN(amount) || amount <= 0) {
      setQuote(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate API delay for quote calculation (1-2 seconds)
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 1000));
      
      const result = calculateSwapOutput(
        formData.fromToken.symbol,
        formData.toToken.symbol,
        amount,
        formData.slippage
      );

      if (!result) {
        setError({
          code: 'NO_QUOTE',
          message: 'Unable to get quote for this swap',
        });
        setQuote(null);
        return;
      }

      const fromPriceUSD = getPriceInUSD(formData.fromToken.symbol, amount) || 0;
      const toPriceUSD = getPriceInUSD(formData.toToken.symbol, result.outputAmount) || 0;

      const newQuote: SwapQuote = {
        fromToken: formData.fromToken,
        toToken: formData.toToken,
        fromAmount: formData.fromAmount,
        toAmount: formatNumber(result.outputAmount, { maximumFractionDigits: 6 }),
        priceImpact: result.priceImpact,
        minimumReceived: formatNumber(result.minimumReceived, { maximumFractionDigits: 6 }),
        price: toPriceUSD / fromPriceUSD || 0,
        slippage: formData.slippage,
      };

      setQuote(newQuote);
      setFormData(prev => ({
        ...prev,
        toAmount: newQuote.toAmount,
      }));

    } catch (err) {
      setError({
        code: 'CALCULATION_ERROR',
        message: err instanceof Error ? err.message : 'Failed to calculate quote',
      });
      setQuote(null);
    } finally {
      setIsLoading(false);
    }
  }, [formData.fromToken, formData.toToken, formData.fromAmount, formData.slippage, calculateSwapOutput, getPriceInUSD]);

  // Update form data
  const updateFormData = useCallback((updates: Partial<SwapFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  // Set from token
  const setFromToken = useCallback((token: Token | null) => {
    updateFormData({ fromToken: token });
  }, [updateFormData]);

  // Set to token
  const setToToken = useCallback((token: Token | null) => {
    updateFormData({ toToken: token });
  }, [updateFormData]);

  // Set from amount
  const setFromAmount = useCallback((amount: string) => {
    updateFormData({ fromAmount: amount });
  }, [updateFormData]);

  // Set to amount
  const setToAmount = useCallback((amount: string) => {
    updateFormData({ toAmount: amount });
  }, [updateFormData]);

  // Set slippage
  const setSlippage = useCallback((slippage: number) => {
    updateFormData({ slippage });
  }, [updateFormData]);

  // Swap tokens
  const swapTokens = useCallback(() => {
    if (!formData.fromToken || !formData.toToken) return;

    setFormData(prev => ({
      ...prev,
      fromToken: prev.toToken,
      toToken: prev.fromToken,
      fromAmount: prev.toAmount,
      toAmount: prev.fromAmount,
    }));
  }, [formData.fromToken, formData.toToken, formData.fromAmount, formData.toAmount]);

  // Clear form
  const clearForm = useCallback(() => {
    setFormData({
      fromToken: null,
      toToken: null,
      fromAmount: '',
      toAmount: '',
      slippage: DEFAULT_SLIPPAGE,
    });
    setQuote(null);
    setError(null);
  }, []);

  // Validate form
  const validationErrors = useMemo((): ValidationError[] => {
    return validateSwapForm(
      formData.fromToken,
      formData.toToken,
      formData.fromAmount,
      formData.slippage
    );
  }, [formData]);

  // Check if form is valid
  const isValid = useMemo(() => {
    return validationErrors.length === 0 && quote !== null;
  }, [validationErrors, quote]);

  // Price impact validation
  const priceImpactValidation = useMemo(() => {
    if (!quote) return { isValid: true };
    return validatePriceImpact(quote.priceImpact);
  }, [quote]);

  // Execute swap (mock implementation)
  const executeSwap = useCallback(async (): Promise<boolean> => {
    if (!isValid || !quote) {
      setError({
        code: 'INVALID_FORM',
        message: 'Form is not valid',
      });
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock success
      return true;
    } catch (err) {
      setError({
        code: 'SWAP_FAILED',
        message: err instanceof Error ? err.message : 'Swap failed',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [isValid, quote]);

  // Recalculate quote when dependencies change
  useMemo(() => {
    calculateQuote().catch(console.error);
  }, [calculateQuote]);

  return {
    formData,
    quote,
    error,
    isLoading,
    validationErrors,
    isValid,
    priceImpactValidation,
    updateFormData,
    setFromToken,
    setToToken,
    setFromAmount,
    setToAmount,
    setSlippage,
    swapTokens,
    clearForm,
    executeSwap,
  };
};
