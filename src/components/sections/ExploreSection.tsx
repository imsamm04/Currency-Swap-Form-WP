import React from 'react';
import { EXPLORE_LINKS } from '../../constants/explore';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface ExploreSectionProps {
  className?: string;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({ className }) => {
  return (
    <section className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore the{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover resources, connect with the community, and start building on our platform
            </p>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            {EXPLORE_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="group block p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ready to start trading? Connect your wallet and begin swapping tokens instantly.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="px-36 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
