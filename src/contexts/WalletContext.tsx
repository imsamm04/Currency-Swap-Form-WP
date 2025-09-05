import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface Wallet {
  id: string;
  name: string;
  icon: string;
  description: string;
  isInstalled?: boolean;
}

export interface WalletContextType {
  isConnected: boolean;
  connectedWallet: Wallet | null;
  connectWallet: (wallet: Wallet) => void;
  disconnectWallet: () => void;
  showWalletModal: boolean;
  setShowWalletModal: (show: boolean) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<Wallet | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const connectWallet = (wallet: Wallet) => {
    setConnectedWallet(wallet);
    setIsConnected(true);
    setShowWalletModal(false);
  };

  const disconnectWallet = () => {
    setConnectedWallet(null);
    setIsConnected(false);
  };

  const value: WalletContextType = {
    isConnected,
    connectedWallet,
    connectWallet,
    disconnectWallet,
    showWalletModal,
    setShowWalletModal,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};
