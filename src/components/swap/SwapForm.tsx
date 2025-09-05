import React from 'react';
import { useSwap } from '../../hooks/useSwap';
import { usePrices } from '../../hooks/usePrices';
import { useWallet } from '../../contexts/WalletContext';
import { TokenInput } from './TokenInput';
import { SwapButton } from './SwapButton';
import { PriceInfo } from './PriceInfo';
import { TransactionDetails } from './TransactionDetails';
import { WalletModal } from '../ui/WalletModal';

export const SwapForm: React.FC = () => {
  const {
    formData,
    quote,
    error,
    validationErrors,
    priceImpactValidation,
    setFromToken,
    setToToken,
    setFromAmount,
    setToAmount,
    swapTokens,
  } = useSwap();

  const { getPriceInUSD } = usePrices();
  const { isConnected, showWalletModal, setShowWalletModal } = useWallet();

  const fromTokenError = validationErrors.find(e => e.field === 'fromToken' || e.field === 'amount');
  const toTokenError = validationErrors.find(e => e.field === 'toToken');

  const fromAmountUSD = formData.fromToken && formData.fromAmount 
    ? getPriceInUSD(formData.fromToken.symbol, parseFloat(formData.fromAmount) || 0) || 0
    : 0;

  const toAmountUSD = formData.toToken && formData.toAmount 
    ? getPriceInUSD(formData.toToken.symbol, parseFloat(formData.toAmount) || 0) || 0
    : 0;

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const getButtonText = () => {
    return 'Connect wallet';
  };

  const isButtonDisabled = false;

  return (
    <div className="w-full">
      <div className="card-elevated p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Swap</h1>
          <p className="text-gray-500">Trade tokens instantly</p>
        </div>

        {/* From Token Input */}
        <TokenInput
          token={formData.fromToken}
          amount={formData.fromAmount}
          onTokenSelect={setFromToken}
          onAmountChange={setFromAmount}
          usdValue={fromAmountUSD}
          label="From"
          placeholder="0.0"
          error={fromTokenError?.message}
          excludeToken={formData.toToken}
        />

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={swapTokens}
            disabled={!formData.fromToken || !formData.toToken}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        {/* To Token Input */}
        <TokenInput
          token={formData.toToken}
          amount={formData.toAmount}
          onTokenSelect={setToToken}
          onAmountChange={setToAmount}
          usdValue={toAmountUSD}
          label="To"
          placeholder="0.0"
          error={toTokenError?.message}
          excludeToken={formData.fromToken}
          disabled
        />

        {/* Price Impact Warning */}
        {priceImpactValidation.warning && (
          <div className="p-3 bg-warning-50 border border-warning-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-warning-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-sm text-warning-700">
                {priceImpactValidation.warning}
              </span>
            </div>
          </div>
        )}

        {/* Price Impact Error */}
        {priceImpactValidation.error && (
          <div className="p-3 bg-error-50 border border-error-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-error-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-error-700">
                {priceImpactValidation.error}
              </span>
            </div>
          </div>
        )}

        {/* General Error */}
        {error && (
          <div className="p-3 bg-error-50 border border-error-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-error-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-error-700">
                {error.message}
              </span>
            </div>
          </div>
        )}

        {/* Price Information */}
        {quote && (
          <div className="border-t border-gray-200 pt-4">
            <PriceInfo quote={quote} />
          </div>
        )}

        {/* Transaction Details */}
        {quote && (
          <div className="border-t border-gray-200 pt-4">
            <TransactionDetails quote={quote} />
          </div>
        )}

        {/* Connect Wallet Button */}
        <SwapButton
          onClick={handleConnectWallet}
          disabled={isButtonDisabled}
          loading={false}
        >
          {getButtonText()}
        </SwapButton>
      </div>

      {/* Wallet Modal */}
      <WalletModal 
        isOpen={showWalletModal} 
        onClose={() => setShowWalletModal(false)} 
      />
    </div>
  );
};
