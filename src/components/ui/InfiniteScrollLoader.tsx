import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface InfiniteScrollLoaderProps {
  isLoading: boolean;
  hasMore: boolean;
  observerRef: (node: HTMLDivElement | null) => void;
  className?: string;
}

export const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> = ({
  isLoading,
  hasMore,
  observerRef,
  className = '',
}) => {
  if (!hasMore) {
    return (
      <div className={`text-center py-4 text-gray-500 text-sm ${className}`}>
        All tokens displayed
      </div>
    );
  }

  return (
    <div 
      ref={observerRef}
      className={`flex justify-center items-center py-6 ${className}`}
    >
      {isLoading ? (
        <div className="flex flex-col items-center space-y-2">
          <LoadingSpinner size="sm" />
          <span className="text-sm text-gray-500">Loading more tokens...</span>
        </div>
      ) : (
        <div className="text-sm text-gray-400">
          Scroll down to load more
        </div>
      )}
    </div>
  );
};
