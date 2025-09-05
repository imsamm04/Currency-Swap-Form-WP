import React from 'react';
import { cn } from '../../utils/cn';

interface StatItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface StatsSectionProps {
  className?: string;
}

const stats: StatItem[] = [
  {
    label: 'All time volume',
    value: '$2.1T',
  },
  {
    label: 'Total value locked',
    value: '$3.2B',
  },
  {
    label: 'All time swappers',
    value: '89.5M',
  },
  {
    label: '24H swap volume',
    value: '$2.8B',
    highlight: true,
  },
];

export const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-16 bg-white/50 backdrop-blur-sm', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by millions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SwapForm Labs powers some of the most used products in crypto. 
              Experience permissionless access, proven security, and dedicated support.
            </p>
            <a 
              href="#swap" 
              className="inline-flex items-center mt-6 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              Trade on the world's largest DEX →
            </a>
          </div>

          {/* Stats Grid */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-large border border-white/20 p-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">SwapForm Protocol stats</h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={cn(
                    'text-center p-4 rounded-xl transition-all duration-200',
                    stat.highlight 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-gray-50 border border-gray-200'
                  )}
                >
                  <div className={cn(
                    'text-2xl md:text-3xl font-bold mb-2',
                    stat.highlight ? 'text-green-600' : 'text-gray-900'
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
