import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface TokenIconProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeType: 'positive' | 'negative';
  gradient: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TokenIcon: React.FC<TokenIconProps> = ({
  symbol,
  name,
  price,
  change,
  changeType,
  gradient,
  position,
  size = 'md',
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };


  return (
    <div
      className={cn(
        'absolute transition-all duration-300 cursor-pointer group',
        position.top,
        position.left,
        position.right,
        position.bottom,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Token Icon */}
      <div
        className={cn(
          'rounded-full transition-all duration-300 flex items-center justify-center text-white font-bold',
          sizeClasses[size],
          gradient,
          isHovered 
            ? 'scale-110 shadow-2xl opacity-100 blur-0' 
            : 'opacity-20 blur-sm'
        )}
      >
        {symbol.slice(0, 2)}
      </div>

      {/* Token Info Tooltip */}
      {isHovered && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-3 min-w-[120px] z-50">
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-sm mb-1">
              {symbol}
            </div>
            <div className="text-xs text-gray-600 mb-1">
              {name}
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              {price}
            </div>
            <div className={cn(
              'text-xs font-medium flex items-center justify-center',
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            )}>
              <span className="mr-1">
                {changeType === 'positive' ? '▲' : '▼'}
              </span>
              {change}
            </div>
          </div>
          
          {/* Arrow pointing to icon */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/95 rotate-45 border-l border-t border-white/20"></div>
        </div>
      )}
    </div>
  );
};
