export interface Token {
  symbol: string;
  name: string;
  address?: string;
  decimals: number;
  logoURI?: string;
  chainId?: number;
}

export interface PriceData {
  currency: string;
  date: string;
  price: number;
}

export interface SwapQuote {
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  priceImpact: number;
  minimumReceived: string;
  price: number;
  slippage: number;
}

export interface SwapFormData {
  fromToken: Token | null;
  toToken: Token | null;
  fromAmount: string;
  toAmount: string;
  slippage: number;
}

export interface SwapSettings {
  slippage: number;
  deadline: number;
  autoRefresh: boolean;
}

export interface Network {
  id: number;
  name: string;
  symbol: string;
  rpcUrl: string;
  blockExplorer: string;
  logoURI?: string;
}

export interface SwapError {
  code: string;
  message: string;
  details?: string;
}

export interface LoadingState {
  isLoading: boolean;
  loadingMessage?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export type SwapStep = 'select-tokens' | 'enter-amount' | 'review' | 'confirm' | 'success';

export interface SwapState {
  step: SwapStep;
  formData: SwapFormData;
  quote: SwapQuote | null;
  error: SwapError | null;
  loading: LoadingState;
  settings: SwapSettings;
}
