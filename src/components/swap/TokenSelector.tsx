import React, { useState, useMemo } from 'react';
import type { Token } from '../../types';
import { POPULAR_TOKENS } from '../../constants/tokens';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { InfiniteScrollLoader } from '../ui/InfiniteScrollLoader';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { cn } from '../../utils/cn';

interface TokenSelectorProps {
  selectedToken: Token | null;
  onTokenSelect: (token: Token) => void;
  excludeToken?: Token | null;
  label?: string;
  className?: string;
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({
  selectedToken,
  onTokenSelect,
  excludeToken,
  label,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tokens based on search query and excluded token
  const filteredTokens = useMemo(() => {
    return POPULAR_TOKENS.filter(token => {
      const matchesSearch = token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           token.name.toLowerCase().includes(searchQuery.toLowerCase());
      const notExcluded = !excludeToken || token.symbol !== excludeToken.symbol;
      return matchesSearch && notExcluded;
    });
  }, [searchQuery, excludeToken]);

  // Use infinite scroll hook
  const {
    displayedItems,
    isLoading,
    hasMore,
    observerRef,
  } = useInfiniteScroll({
    items: filteredTokens,
    itemsPerPage: 20,
  });

  const handleTokenSelect = (token: Token) => {
    onTokenSelect(token);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <div className={cn('w-full', className)}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        
        <Button
          onClick={() => setIsOpen(true)}
          variant="secondary"
          className="w-full p-4 justify-between h-auto"
        >
          {selectedToken ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  {selectedToken.logoURI ? (
                    <img
                      src={selectedToken.logoURI}
                      alt={selectedToken.symbol}
                      className="w-6 h-6 rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span className="text-xs font-medium text-gray-600">
                      {selectedToken.symbol.slice(0, 2)}
                    </span>
                  )}
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">
                    {selectedToken.symbol}
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedToken.name}
                  </div>
                </div>
              </div>
              <Icon name="chevron-down" className="text-gray-400" />
            </>
          ) : (
            <>
              <span className="text-gray-500">Select token</span>
              <Icon name="chevron-down" className="text-gray-400" />
            </>
          )}
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSearchQuery('');
        }}
        title="Select Token"
        size="md"
      >
        <div className="space-y-4">
          <Input
            placeholder="Search tokens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Icon name="search" />}
          />
          
          <div className="max-h-96 overflow-y-auto space-y-2">
            {displayedItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {searchQuery ? 'No tokens found' : 'No tokens available'}
              </div>
            ) : (
              <>
                {displayedItems.map((token) => (
                  <Button
                    key={`${token.symbol}-${token.name}`}
                    onClick={() => handleTokenSelect(token)}
                    variant="ghost"
                    className="w-full p-3 justify-start h-auto"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {token.logoURI ? (
                          <img
                            src={token.logoURI}
                            alt={token.symbol}
                            className="w-8 h-8 rounded-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-sm font-medium text-gray-600">
                            {token.symbol.slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-gray-900">
                          {token.symbol}
                        </div>
                        <div className="text-sm text-gray-500">
                          {token.name}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
                
                {/* Infinite scroll loader */}
                <InfiniteScrollLoader
                  isLoading={isLoading}
                  hasMore={hasMore}
                  observerRef={observerRef}
                />
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
