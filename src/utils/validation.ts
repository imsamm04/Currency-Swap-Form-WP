import type { Token, ValidationError } from '../types';
import { MIN_SWAP_AMOUNT, MAX_SWAP_AMOUNT } from '../constants/tokens';

export const validateAmount = (amount: string): ValidationError | null => {
  if (!amount || amount.trim() === '') {
    return {
      field: 'amount',
      message: 'Amount is required',
    };
  }

  const numAmount = parseFloat(amount);
  
  if (isNaN(numAmount)) {
    return {
      field: 'amount',
      message: 'Please enter a valid number',
    };
  }

  if (numAmount <= 0) {
    return {
      field: 'amount',
      message: 'Amount must be greater than 0',
    };
  }

  if (numAmount < MIN_SWAP_AMOUNT) {
    return {
      field: 'amount',
      message: `Minimum amount is ${MIN_SWAP_AMOUNT}`,
    };
  }

  if (numAmount > MAX_SWAP_AMOUNT) {
    return {
      field: 'amount',
      message: `Maximum amount is ${MAX_SWAP_AMOUNT}`,
    };
  }

  return null;
};

export const validateTokenSelection = (
  fromToken: Token | null,
  toToken: Token | null
): ValidationError | null => {
  if (!fromToken) {
    return {
      field: 'fromToken',
      message: 'Please select a token to swap from',
    };
  }

  if (!toToken) {
    return {
      field: 'toToken',
      message: 'Please select a token to swap to',
    };
  }

  if (fromToken.symbol === toToken.symbol) {
    return {
      field: 'tokens',
      message: 'Cannot swap the same token',
    };
  }

  return null;
};

export const validateSlippage = (slippage: number): ValidationError | null => {
  if (slippage < 0.1) {
    return {
      field: 'slippage',
      message: 'Slippage must be at least 0.1%',
    };
  }

  if (slippage > 50) {
    return {
      field: 'slippage',
      message: 'Slippage cannot exceed 50%',
    };
  }

  return null;
};

export const validateSwapForm = (
  fromToken: Token | null,
  toToken: Token | null,
  fromAmount: string,
  slippage: number
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Validate token selection
  const tokenError = validateTokenSelection(fromToken, toToken);
  if (tokenError) {
    errors.push(tokenError);
  }

  // Validate amount
  const amountError = validateAmount(fromAmount);
  if (amountError) {
    errors.push(amountError);
  }

  // Validate slippage
  const slippageError = validateSlippage(slippage);
  if (slippageError) {
    errors.push(slippageError);
  }

  return errors;
};

export const validatePriceImpact = (priceImpact: number): {
  isValid: boolean;
  warning?: string;
  error?: string;
} => {
  if (priceImpact > 5) {
    return {
      isValid: false,
      error: 'Price impact too high. Transaction may fail.',
    };
  }

  if (priceImpact > 3) {
    return {
      isValid: true,
      warning: 'High price impact. Consider reducing trade size.',
    };
  }

  return { isValid: true };
};

export const validateBalance = (
  amount: number,
  balance: number,
  tokenSymbol: string
): ValidationError | null => {
  if (amount > balance) {
    return {
      field: 'amount',
      message: `Insufficient ${tokenSymbol} balance`,
    };
  }

  return null;
};

export const validateNetwork = (
  fromToken: Token | null,
  toToken: Token | null,
  currentNetwork: string
): ValidationError | null => {
  if (!fromToken || !toToken) {
    return null;
  }

  // In a real app, you would check if tokens are available on the current network
  // For now, we'll assume all tokens are available on all networks
  return null;
};

export const sanitizeInput = (input: string): string => {
  // Remove any non-numeric characters except decimal point
  return input.replace(/[^\d.]/g, '');
};

export const isValidDecimal = (value: string, maxDecimals: number = 18): boolean => {
  const regex = new RegExp(`^\\d*\\.?\\d{0,${maxDecimals}}$`);
  return regex.test(value);
};

export const formatInputValue = (value: string, maxDecimals: number = 18): string => {
  const sanitized = sanitizeInput(value);
  
  // Prevent multiple decimal points
  const parts = sanitized.split('.');
  if (parts.length > 2) {
    return parts[0] + '.' + parts.slice(1).join('');
  }
  
  // Limit decimal places
  if (parts[1] && parts[1].length > maxDecimals) {
    return parts[0] + '.' + parts[1].slice(0, maxDecimals);
  }
  
  return sanitized;
};
