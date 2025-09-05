import React from 'react';
import { Modal } from './Modal';
import { useWallet } from '../../contexts/WalletContext';
import { AVAILABLE_WALLETS } from '../../constants/wallets';
import { cn } from '../../utils/cn';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { connectWallet } = useWallet();

  const handleWalletSelect = (wallet: typeof AVAILABLE_WALLETS[0]) => {
    connectWallet(wallet);
  };

  const mainWallets = AVAILABLE_WALLETS.slice(0, 2);
  const otherWallets = AVAILABLE_WALLETS.slice(2);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Connect a wallet</h2>
        </div>

        {/* Main Wallets */}
        <div className="space-y-3 mb-6">
          {mainWallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => handleWalletSelect(wallet)}
              className={cn(
                'w-full p-4 rounded-2xl border-2 transition-all duration-200',
                'hover:border-primary-200 hover:shadow-md',
                wallet.id === 'uniswap-wallet'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 border-transparent text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{wallet.icon}</div>
                <div className="flex-1 text-left">
                  <div className="font-semibold">{wallet.name}</div>
                  <div className={cn(
                    'text-sm',
                    wallet.id === 'uniswap-wallet' ? 'text-white/80' : 'text-gray-500'
                  )}>
                    {wallet.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Other wallets</span>
          </div>
        </div>

        {/* Other Wallets */}
        <div className="space-y-3">
          {otherWallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => handleWalletSelect(wallet)}
              className="w-full p-4 rounded-2xl border border-gray-200 bg-white hover:border-primary-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{wallet.icon}</div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900">{wallet.name}</div>
                  <div className="text-sm text-gray-500">{wallet.description}</div>
                </div>
                {wallet.isInstalled && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By connecting a wallet, you agree to our Terms of Service and consent to our Privacy Policy.
          </p>
        </div>
      </div>
    </Modal>
  );
};
