import React from 'react';
import { SwapForm } from '../swap/SwapForm';
import { TokenIcon } from '../ui/TokenIcon';
import { FLOATING_TOKENS } from '../../constants/floatingTokens';
import { cn } from '../../utils/cn';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn('relative py-20 lg:py-32', className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Token Icons */}
        {FLOATING_TOKENS.map((token, index) => (
          <div key={token.symbol} className="pointer-events-auto">
            <TokenIcon
              symbol={token.symbol}
              name={token.name}
              price={token.price}
              change={token.change}
              changeType={token.changeType}
              gradient={token.gradient}
              position={token.position}
              size={token.size}
              className={`float-${(index % 5) + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Swap anytime,{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              anywhere
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Trade tokens instantly with the most trusted decentralized exchange. 
            Access deep liquidity across multiple chains.
          </p>

          {/* Swap Form Card */}
          <div className="max-w-md mx-auto mb-12">
            <div>
              <SwapForm />
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Buy and sell crypto on 14+ networks including Ethereum, Polygon, and Base. 
            No registration required.
          </p>
        </div>
      </div>
    </section>
  );
};
