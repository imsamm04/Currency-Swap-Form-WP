import type { PriceData } from '../types';

// Mock price data - in real app this would come from API
const MOCK_PRICE_DATA: PriceData[] = [
  {"currency":"BLUR","date":"2023-08-29T07:10:40.000Z","price":0.20811525423728813},
  {"currency":"bNEO","date":"2023-08-29T07:10:50.000Z","price":7.1282679},
  {"currency":"BUSD","date":"2023-08-29T07:10:40.000Z","price":0.999183113},
  {"currency":"USD","date":"2023-08-29T07:10:30.000Z","price":1},
  {"currency":"ETH","date":"2023-08-29T07:10:52.000Z","price":1645.9337373737374},
  {"currency":"GMX","date":"2023-08-29T07:10:40.000Z","price":36.345114372881355},
  {"currency":"STEVMOS","date":"2023-08-29T07:10:40.000Z","price":0.07276706779661017},
  {"currency":"LUNA","date":"2023-08-29T07:10:40.000Z","price":0.40955638983050846},
  {"currency":"RATOM","date":"2023-08-29T07:10:40.000Z","price":10.250918915254237},
  {"currency":"STRD","date":"2023-08-29T07:10:40.000Z","price":0.7386553389830508},
  {"currency":"EVMOS","date":"2023-08-29T07:10:40.000Z","price":0.06246181355932203},
  {"currency":"IBCX","date":"2023-08-29T07:10:40.000Z","price":41.26811355932203},
  {"currency":"IRIS","date":"2023-08-29T07:10:40.000Z","price":0.0177095593220339},
  {"currency":"ampLUNA","date":"2023-08-29T07:10:40.000Z","price":0.49548589830508477},
  {"currency":"KUJI","date":"2023-08-29T07:10:45.000Z","price":0.675},
  {"currency":"STOSMO","date":"2023-08-29T07:10:45.000Z","price":0.431318},
  {"currency":"USDC","date":"2023-08-29T07:10:40.000Z","price":0.989832},
  {"currency":"axlUSDC","date":"2023-08-29T07:10:40.000Z","price":0.989832},
  {"currency":"ATOM","date":"2023-08-29T07:10:50.000Z","price":7.186657333333334},
  {"currency":"STATOM","date":"2023-08-29T07:10:45.000Z","price":8.512162050847458},
  {"currency":"OSMO","date":"2023-08-29T07:10:50.000Z","price":0.3772974333333333},
  {"currency":"rSWTH","date":"2023-08-29T07:10:40.000Z","price":0.00408771},
  {"currency":"STLUNA","date":"2023-08-29T07:10:40.000Z","price":0.44232210169491526},
  {"currency":"LSI","date":"2023-08-29T07:10:50.000Z","price":67.69661525423729},
  {"currency":"OKB","date":"2023-08-29T07:10:40.000Z","price":42.97562059322034},
  {"currency":"OKT","date":"2023-08-29T07:10:40.000Z","price":13.561577966101694},
  {"currency":"SWTH","date":"2023-08-29T07:10:45.000Z","price":0.004039850455012084},
  {"currency":"USC","date":"2023-08-29T07:10:40.000Z","price":0.994},
  {"currency":"WBTC","date":"2023-08-29T07:10:52.000Z","price":26002.82202020202},
  {"currency":"wstETH","date":"2023-08-29T07:10:40.000Z","price":1872.2579742372882},
  {"currency":"YieldUSD","date":"2023-08-29T07:10:40.000Z","price":1.0290847966101695},
  {"currency":"ZIL","date":"2023-08-29T07:10:50.000Z","price":0.01651813559322034}
];

class PriceService {
  private priceCache: Map<string, PriceData> = new Map();
  private lastFetch: number = 0;
  private readonly CACHE_DURATION = 30000; // 30 seconds

  async fetchPrices(): Promise<PriceData[]> {
    const now = Date.now();
    
    // Return cached data if still fresh
    if (now - this.lastFetch < this.CACHE_DURATION && this.priceCache.size > 0) {
      return Array.from(this.priceCache.values());
    }

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // const response = await fetch('https://interview.switcheo.com/prices.json');
      // const data = await response.json();
      
      const data = MOCK_PRICE_DATA;
      
      // Update cache
      this.priceCache.clear();
      data.forEach(price => {
        this.priceCache.set(price.currency, price);
      });
      
      this.lastFetch = now;
      return data;
    } catch (error) {
      console.error('Failed to fetch prices:', error);
      throw new Error('Failed to fetch price data');
    }
  }

  getPrice(symbol: string): number | null {
    const priceData = this.priceCache.get(symbol);
    return priceData ? priceData.price : null;
  }

  getPriceInUSD(symbol: string, amount: number): number | null {
    const price = this.getPrice(symbol);
    return price ? price * amount : null;
  }

  calculateExchangeRate(fromSymbol: string, toSymbol: string): number | null {
    const fromPrice = this.getPrice(fromSymbol);
    const toPrice = this.getPrice(toSymbol);
    
    if (!fromPrice || !toPrice) {
      return null;
    }
    
    return fromPrice / toPrice;
  }

  calculateSwapOutput(
    fromSymbol: string, 
    toSymbol: string, 
    inputAmount: number,
    slippage: number = 0.5
  ): { outputAmount: number; priceImpact: number; minimumReceived: number } | null {
    const exchangeRate = this.calculateExchangeRate(fromSymbol, toSymbol);
    
    if (!exchangeRate) {
      return null;
    }
    
    const outputAmount = inputAmount * exchangeRate;
    const priceImpact = this.calculatePriceImpact(fromSymbol, toSymbol, inputAmount);
    const minimumReceived = outputAmount * (1 - slippage / 100);
    
    return {
      outputAmount,
      priceImpact,
      minimumReceived
    };
  }

  private calculatePriceImpact(fromSymbol: string, toSymbol: string, amount: number): number {
    // Simplified price impact calculation
    // In real DEX, this would be based on liquidity pools
    const baseImpact = 0.1;
    const amountImpact = Math.min(amount / 10000, 2); // Max 2% for large amounts
    return baseImpact + amountImpact;
  }

  // Get all available tokens with prices
  getAvailableTokens(): string[] {
    return Array.from(this.priceCache.keys());
  }

  // Check if token has price data
  hasPrice(symbol: string): boolean {
    return this.priceCache.has(symbol);
  }
}

export const priceService = new PriceService();
