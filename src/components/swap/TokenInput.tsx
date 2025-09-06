import React, { useState } from 'react';
import type { Token } from '../../types';
import { TokenSelector } from './TokenSelector';
import { cn } from '../../utils/cn';
import { formatNumber, formatCurrency } from '../../utils/formatting';

interface TokenInputProps {
  token: Token | null;
  amount: string;
  onTokenSelect: (token: Token) => void;
  onAmountChange: (amount: string) => void;
  balance?: number;
  usdValue?: number;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  excludeToken?: Token | null;
  className?: string;
}

export const TokenInput: React.FC<TokenInputProps> = ({
  token,
  amount,
  onTokenSelect,
  onAmountChange,
  balance,
  usdValue,
  label,
  placeholder = '0.0',
  disabled = false,
  error,
  excludeToken,
  className,
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      onAmountChange(value);
      setHasInteracted(true);
    }
  };

  const handleTokenSelect = (selectedToken: Token) => {
    onTokenSelect(selectedToken);
    setHasInteracted(true);
  };

  const handleMaxClick = () => {
    if (balance && balance > 0) {
      onAmountChange(balance.toString());
      setHasInteracted(true);
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-opacity-20 transition-all duration-200">
        <div className="flex items-center justify-between mb-3">
          <TokenSelector
            selectedToken={token}
            onTokenSelect={handleTokenSelect}
            excludeToken={excludeToken}
            className="flex-1"
          />
          
          {balance !== undefined && (
            <div className="text-right ml-2 sm:ml-4">
              <div className="text-xs sm:text-sm text-gray-500">Balance</div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">
                {formatNumber(balance, { maximumFractionDigits: 6 })}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder={placeholder}
              disabled={disabled}
              className="w-full text-lg sm:text-2xl font-semibold bg-transparent border-none outline-none placeholder-gray-400 disabled:text-gray-400"
            />
            {usdValue !== undefined && (
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                ≈ {formatCurrency(usdValue)}
              </div>
            )}
          </div>
          
          {balance !== undefined && balance > 0 && !disabled && (
            <button
              onClick={handleMaxClick}
              className="ml-2 sm:ml-4 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-200"
            >
              MAX
            </button>
          )}
        </div>
      </div>
      
      {error && hasInteracted && (
        <p className="text-sm text-error-600">
          {error}
        </p>
      )}
    </div>
  );
};
