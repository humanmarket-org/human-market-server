export default interface Money {
  currency: Currency;
  amount: number;
}

export type Currency = 'ars' | 'usd' | 'eur' | 'gbp' | 'btc';
