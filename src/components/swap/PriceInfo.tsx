import React from 'react';
import type { SwapQuote } from '../../types';
import { formatNumber, formatPercentage } from '../../utils/formatting';
import { cn } from '../../utils/cn';

interface PriceInfoProps {
  quote: SwapQuote | null;
  className?: string;
}

export const PriceInfo: React.FC<PriceInfoProps> = ({
  quote,
  className,
}) => {
  if (!quote) return null;

  const priceImpactColor = quote.priceImpact > 5 
    ? 'text-error-600' 
    : quote.priceImpact > 3 
    ? 'text-warning-600' 
    : 'text-gray-600';

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Rate</span>
        <span className="text-gray-900 font-medium">
          1 {quote.fromToken.symbol} = {formatNumber(quote.price, { maximumFractionDigits: 6 })} {quote.toToken.symbol}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Price Impact</span>
        <span className={cn('font-medium', priceImpactColor)}>
          {formatPercentage(quote.priceImpact, { maximumFractionDigits: 2 })}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Minimum Received</span>
        <span className="text-gray-900 font-medium">
          {formatNumber(parseFloat(quote.minimumReceived), { maximumFractionDigits: 6 })} {quote.toToken.symbol}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Slippage Tolerance</span>
        <span className="text-gray-900 font-medium">
          {formatPercentage(quote.slippage, { maximumFractionDigits: 1 })}
        </span>
      </div>
    </div>
  );
};
