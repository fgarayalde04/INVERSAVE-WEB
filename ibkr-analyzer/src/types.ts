export interface Position {
  symbol: string;
  description: string;
  quantity: number;
  marketValue: number;
  costBasis: number;
  unrealizedPnL: number;
  percentOfNAV: number;
  currency: string;
  assetClass: string;
}

export interface Trade {
  symbol: string;
  dateTime: string;
  quantity: number;
  price: number;
  proceeds: number;
  commission: number;
  realizedPnL: number;
  buySell: "BUY" | "SELL";
  currency: string;
}

export interface Dividend {
  symbol: string;
  date: string;
  amount: number;
  currency: string;
  description: string;
}

export interface CashMovement {
  date: string;
  description: string;
  amount: number;
  currency: string;
  type: string;
}

export interface ParsedReport {
  reportDate: string;
  generatedAt: string;
  accountId: string;
  currency: string;
  nav: number;
  cash: number;
  totalEquityValue: number;
  totalSecuritiesValue: number;
  realizedPnL: number;
  unrealizedPnL: number;
  positions: Position[];
  trades: Trade[];
  dividends: Dividend[];
  cashMovements: CashMovement[];
}

export interface ReportDiff {
  newPositions: Position[];
  closedPositions: Position[];
  weightChanges: Array<{
    symbol: string;
    previousPct: number;
    currentPct: number;
    deltaPct: number;
  }>;
  cashDelta: number;
  realizedPnLDelta: number;
  unrealizedPnLDelta: number;
  navDelta: number;
  navDeltaPct: number;
  newTrades: Trade[];
  dividendsReceived: Dividend[];
}
