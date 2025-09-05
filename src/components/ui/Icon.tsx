import React from 'react';
import { cn } from '../../utils/cn';

interface IconProps {
  name: 'chevron-down' | 'search' | 'info' | 'question';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const Icon: React.FC<IconProps> = ({ 
  name, 
  className = '', 
  size = 'md' 
}) => {
  const sizeClass = iconSizes[size];
  
  const icons = {
    'chevron-down': (
      <svg 
        className={cn(sizeClass, className)} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    ),
    'search': (
      <svg 
        className={cn(sizeClass, className)} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
    ),
    'info': (
      <svg 
        className={cn(sizeClass, className)} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
    'question': (
      <svg 
        className={cn(sizeClass, className)} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">?</text>
      </svg>
    ),
  };

  return icons[name] || null;
};
