import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../ui/Icon';

interface TransactionDetailsProps {
  quote: {
    fromToken: { symbol: string };
    toToken: { symbol: string };
    fromAmount: string;
    toAmount: string;
    price: number;
    priceImpact: number;
    slippage: number;
  };
  className?: string;
}

export const TransactionDetails: React.FC<TransactionDetailsProps> = ({ quote, className }) => {
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);
  
  const fromPriceUSD = parseFloat(quote.fromAmount) * quote.price;
  const toPriceUSD = parseFloat(quote.toAmount) * quote.price;
  const fee = fromPriceUSD * 0.0025; // 0.25% fee
  const networkCost: number = 0; // Mock network cost
  const orderRouting = 'Uniswap API';

  const tooltips = {
    fee: 'Fees are applied to ensure the best experience with Uniswap, and have already been factored into this quote.',
    networkCost: 'Network cost covers the gas fees required to execute your transaction on the blockchain.',
    orderRouting: 'Order routing determines the best path for your swap to get optimal prices and liquidity.',
    priceImpact: 'Price impact measures how much your trade affects the token price in the pool.',
    slippage: 'Slippage tolerance is the maximum price change you accept between transaction submission and execution.'
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Exchange Rate */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            1 {quote.toToken.symbol} = {quote.price.toFixed(4)} {quote.fromToken.symbol}
          </span>
          <span className="text-sm text-gray-500">
            (${toPriceUSD.toLocaleString()})
          </span>
        </div>
        {/* <Icon name="question" className="text-gray-400" size="sm" /> */}
      </div>

      {/* Transaction Details */}
      <div className="space-y-3">
        {/* Fee */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 relative">
            <span className="text-sm text-gray-600">Fee (0.25%)</span>
            <div 
              className="relative"
              onMouseEnter={() => setHoveredTooltip('fee')}
              onMouseLeave={() => setHoveredTooltip(null)}
            >
            <Icon name="question" className="text-gray-400" size="sm" />
              {hoveredTooltip === 'fee' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <p className="text-xs text-gray-700">{tooltips.fee}</p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
                </div>
              )}
            </div>
          </div>
          <span className="text-sm font-medium text-gray-900">
            ${fee.toLocaleString()}
          </span>
        </div>

        {/* Network Cost */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 relative">
            <span className="text-sm text-gray-600">Network cost</span>
            <div 
              className="relative"
              onMouseEnter={() => setHoveredTooltip('networkCost')}
              onMouseLeave={() => setHoveredTooltip(null)}
            >
             <Icon name="question" className="text-gray-400" size="sm" />
              {hoveredTooltip === 'networkCost' && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <p className="text-xs text-gray-700">{tooltips.networkCost}</p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
                </div>
              )}
            </div>
          </div>
          <span className="text-sm font-medium text-gray-900">
            {networkCost === 0 ? 'N/A' : `$${networkCost.toLocaleString()}`}
          </span>
        </div>

        {/* Order Routing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Order routing</span>
            <Icon name="question" className="text-gray-400" size="sm" />
          </div>
          <span className="text-sm font-medium text-gray-900">{orderRouting}</span>
        </div>

        {/* Price Impact */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Price impact</span>
          </div>
          <span className={cn(
            'text-sm font-medium',
            quote.priceImpact < 0 ? 'text-red-600' : 'text-green-600'
          )}>
            {quote.priceImpact > 0 ? '+' : ''}{quote.priceImpact.toFixed(2)}%
          </span>
        </div>

        {/* Max Slippage */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Max slippage</span>
          </div>
          <span className="text-sm font-medium text-gray-900">
            Auto {quote.slippage.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};
