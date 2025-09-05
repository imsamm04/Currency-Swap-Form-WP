export interface FloatingToken {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changeType: 'positive' | 'negative';
  gradient: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: 'sm' | 'md' | 'lg';
}

export const FLOATING_TOKENS: FloatingToken[] = [
  // Top center area - around the form
  {
    symbol: 'EUROC',
    name: 'Euro Coin',
    price: '$1.08',
    change: '0.70%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-blue-400 to-purple-600',
    position: { top: 'top-20', left: 'left-1/2' },
    size: 'lg'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    price: '$2,431.49',
    change: '2.05%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
    position: { top: 'top-16', left: 'left-1/3' },
    size: 'md'
  },
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    price: '$312.45',
    change: '2.34%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    position: { top: 'top-16', right: 'right-1/3' },
    size: 'md'
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    price: '$1.00',
    change: '0.01%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    position: { top: 'top-24', left: 'left-1/4' },
    size: 'sm'
  },
  {
    symbol: 'SHIB',
    name: 'Shiba Inu',
    price: '$0.000012',
    change: '2.78%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-orange-600 to-red-600',
    position: { top: 'top-24', right: 'right-1/4' },
    size: 'sm'
  },
  
  // Upper middle - closer to center
  {
    symbol: 'SOL',
    name: 'Solana',
    price: '$98.76',
    change: '4.56%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    position: { top: 'top-1/5', left: 'left-1/4' },
    size: 'lg'
  },
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    price: '$25.43',
    change: '3.45%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-red-500 to-orange-500',
    position: { top: 'top-1/3', left: 'right-1/3' },
    size: 'sm'
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    price: '$6.78',
    change: '0.89%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-pink-500 to-red-500',
    position: { top: 'bottom-1/3', right: 'left-1/4' },
    size: 'md'
  },
  {
    symbol: 'LTC',
    name: 'Litecoin',
    price: '$72.34',
    change: '1.67%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-gray-500 to-gray-600',
    position: { top: 'top-1/4', left: 'left-1/6' },
    size: 'sm'
  },
  {
    symbol: 'ALGO',
    name: 'Algorand',
    price: '$0.18',
    change: '1.12%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-cyan-600 to-teal-600',
    position: { top: 'top-1/4', right: 'right-1/6' },
    size: 'sm'
  },
  
  // Middle area - around the form
  {
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    price: '$43,250.82',
    change: '1.85%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-orange-400 to-orange-600',
    position: { top: 'top-1/4', left: 'right-1/3' },
    size: 'md'
  },
  {
    symbol: 'MKR',
    name: 'Wrapped Bitcoin',
    price: '$43,250.82',
    change: '1.85%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-orange-400 to-orange-600',
    position: { top: 'top-1/4', left: 'right-1/4' },
    size: 'md'
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    price: '$0.52',
    change: '1.89%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-blue-700 to-blue-800',
    position: { top: 'top-1/3', left: 'left-1/4' },
    size: 'lg'
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    price: '$14.67',
    change: '2.12%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    position: { top: 'top-1/2', left: 'left-1/4' },
    size: 'md'
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    price: '$9.59',
    change: '3.10%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    position: { top: 'top-1/2', right: 'right-1/4' },
    size: 'md'
  },
  {
    symbol: 'COMP',
    name: 'Uniswap',
    price: '$9.59',
    change: '3.10%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    position: { top: 'top-1/2', right: 'right-1' },
    size: 'md'
  },
  {
    symbol: 'AAVE',
    name: 'Aave',
    price: '$89.12',
    change: '4.56%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-purple-600 to-indigo-600',
    position: { top: 'top-1/2', left: 'left-1/8' },
    size: 'sm'
  },
  {
    symbol: 'COMP',
    name: 'Compound',
    price: '$45.67',
    change: '2.34%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-indigo-600 to-blue-600',
    position: { top: 'top-1/2', right: 'right-1/8' },
    size: 'sm'
  },
  {
    symbol: 'MKR',
    name: 'Maker',
    price: '$1,234.56',
    change: '1.67%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    position: { top: 'top-1/2', left: 'left-1/12' },
    size: 'sm'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix',
    price: '$2.34',
    change: '3.12%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-cyan-600 to-teal-600',
    position: { top: 'top-1/2', right: 'right-1/12' },
    size: 'sm'
  },
  {
    symbol: 'YFI',
    name: 'Yearn Finance',
    price: '$5,678.90',
    change: '2.78%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-teal-600 to-green-600',
    position: { top: 'top-1/2', left: 'left-1/16' },
    size: 'sm'
  },
  {
    symbol: 'CRV',
    name: 'Curve DAO',
    price: '$0.45',
    change: '1.89%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-green-600 to-emerald-600',
    position: { top: 'top-1/2', right: 'right-1/16' },
    size: 'sm'
  },
  {
    symbol: '1INCH',
    name: '1inch',
    price: '$0.34',
    change: '2.45%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600',
    position: { top: 'top-1/2', left: 'left-1/20' },
    size: 'sm'
  },
  {
    symbol: 'SUSHI',
    name: 'SushiSwap',
    price: '$1.23',
    change: '3.67%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-teal-600 to-cyan-600',
    position: { top: 'top-1/2', right: 'right-1/20' },
    size: 'sm'
  },
  
  // Lower middle - closer to center
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: '$0.45',
    change: '1.23%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-500',
    position: { bottom: 'bottom-1/3', left: 'left-1/5' },
    size: 'sm'
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    price: '$0.08',
    change: '5.23%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-yellow-600 to-orange-600',
    position: { bottom: 'bottom-1/3', left: 'right-1/35' },
    size: 'sm'
  },
  {
    symbol: 'TRX',
    name: 'TRON',
    price: '$0.11',
    change: '1.45%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-red-600 to-pink-600',
    position: { bottom: 'bottom-1/3', right: 'right-1/3' },
    size: 'md'
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    price: '$245.67',
    change: '0.45%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    position: { bottom: 'bottom-1/4', left: 'left-1/6' },
    size: 'md'
  },
  {
    symbol: 'VET',
    name: 'VeChain',
    price: '$0.03',
    change: '0.78%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-teal-600 to-green-600',
    position: { bottom: 'bottom-1/4', right: 'right-1/6' },
    size: 'sm'
  },
  
  // Bottom center area
  {
    symbol: 'USDC',
    name: 'USD Coin',
    price: '$1.00',
    change: '0.00%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-green-400 to-green-600',
    position: { bottom: 'bottom-20', left: 'left-1/2' },
    size: 'lg'
  },
  {
    symbol: 'ATOM',
    name: 'Cosmos',
    price: '$7.18',
    change: '3.12%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-pink-400 to-pink-600',
    position: { bottom: 'bottom-16', left: 'left-1/3' },
    size: 'lg'
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    price: '$0.286',
    change: '1.81%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    position: { bottom: 'bottom-16', right: 'right-1/3' },
    size: 'sm'
  },
  {
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    price: '$3.45',
    change: '3.67%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-purple-600 to-indigo-600',
    position: { bottom: 'bottom-12', left: 'left-1/4' },
    size: 'sm'
  },
  {
    symbol: 'FTM',
    name: 'Fantom',
    price: '$0.34',
    change: '2.34%',
    changeType: 'positive',
    gradient: 'bg-gradient-to-br from-indigo-600 to-blue-600',
    position: { bottom: 'bottom-12', right: 'right-1/4' },
    size: 'md'
  }
];
