import React from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface SwapButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const SwapButton: React.FC<SwapButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      variant="primary"
      size="lg"
      className={cn(
        'w-full py-4 text-lg font-semibold rounded-xl',
        'bg-gradient-to-r from-primary-500 to-primary-600',
        'hover:from-primary-600 hover:to-primary-700',
        'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-all duration-200 shadow-soft hover:shadow-medium',
        className
      )}
    >
      {children}
    </Button>
  );
};
