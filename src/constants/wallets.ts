import type { Wallet } from '../contexts/WalletContext';

export const AVAILABLE_WALLETS: Wallet[] = [
  {
    id: 'uniswap-wallet',
    name: 'Get Uniswap Wallet',
    icon: '🦄',
    description: 'Available on iOS, Android, and Chrome',
    isInstalled: false,
  },
  {
    id: 'uniswap-mobile',
    name: 'Uniswap Mobile',
    icon: '📱',
    description: 'Scan QR code to connect',
    isInstalled: false,
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '🔗',
    description: 'Connect with mobile wallet',
    isInstalled: true,
  },
  {
    id: 'coinbase-wallet',
    name: 'Coinbase Wallet',
    icon: '🔵',
    description: 'Connect with Coinbase',
    isInstalled: true,
  },
  {
    id: 'binance-wallet',
    name: 'Binance Wallet',
    icon: '🟡',
    description: 'Connect with Binance',
    isInstalled: true,
  },
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    description: 'Connect with MetaMask',
    isInstalled: true,
  },
];
