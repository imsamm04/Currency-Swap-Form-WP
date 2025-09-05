import React from 'react';
import { cn } from '../../utils/cn';

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  actionHref: string;
  icon: React.ReactNode;
  gradient: string;
  features?: string[];
}

interface FeaturesSectionProps {
  className?: string;
}

const features: Feature[] = [
  {
    title: 'Web app',
    subtitle: 'Permissionless swapping.',
    description: 'Access deep liquidity, explore tokens, set limit orders, and provide liquidity for thousands of tokens across 14 chains.',
    actionText: 'Explore tokens →',
    actionHref: '/tokens',
    gradient: 'from-blue-50 to-blue-100',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'ETH: $4,431.49 ▲ 2.05%',
      'USDC: $1.00 ▲ 0.00%',
      'UNI: $9.59 ▲ 3.1%',
      'MATIC: $0.286 ▲ 1.81%'
    ]
  },
  {
    title: 'SwapForm wallet',
    subtitle: 'Swap, store, explore.',
    description: 'The trusted self-custody crypto wallet and extension with millions of downloads, support from real humans, and a 4.8★ rating.',
    actionText: 'Download SwapForm Wallet →',
    actionHref: '/wallet',
    gradient: 'from-purple-50 to-pink-100',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: 'SwapFormX',
    subtitle: 'Smarter swaps, zero friction.',
    description: 'Gasless transactions and MEV protection, with zero fees for failed swaps.',
    actionText: 'Experience SwapFormX →',
    actionHref: '/swapformx',
    gradient: 'from-violet-50 to-purple-100',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ['MEV protection', 'Best swap', 'Free']
  },
  {
    title: 'Liquidity Provision',
    subtitle: 'Power onchain markets.',
    description: 'Provide liquidity and collect fees using the SwapForm Interface.',
    actionText: 'Explore pools →',
    actionHref: '/pools',
    gradient: 'from-green-50 to-emerald-100',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for all the ways you swap
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                'relative p-8 rounded-2xl border border-white/20 shadow-large transition-all duration-300 hover:shadow-xl hover:scale-105',
                `bg-gradient-to-br ${feature.gradient}`
              )}
            >
              {/* Icon */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center text-gray-700 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.subtitle}
              </h4>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Features List (if available) */}
              {feature.features && (
                <div className="mb-6">
                  {feature.title === 'Web app' ? (
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : feature.title === 'SwapFormX' ? (
                    <div className="flex space-x-2">
                      {feature.features.map((item, idx) => (
                        <span
                          key={idx}
                          className={cn(
                            'px-3 py-1 rounded-full text-xs font-medium',
                            item === 'MEV protection' || item === 'Best swap'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-white/80 text-gray-700'
                          )}
                        >
                          {item === 'Best swap' ? '✓ Best swap' : item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}

              {/* Action Button */}
              <a
                href={feature.actionHref}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {feature.actionText}
              </a>

              {/* Decorative Elements */}
              {feature.title === 'Liquidity Provision' && (
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
