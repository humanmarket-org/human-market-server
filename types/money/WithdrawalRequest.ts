import Money from './Money';
import Transaction from './Transaction';

export type WithdrawalPlatform = {
  platform: 'mercadopago' | 'paypal' | 'payoneer' | 'bitcoins' | 'bank' | 'cash';
  platformHash: string;
}

export default class WithdrawalRequest {
  platform: WithdrawalPlatform;
  amount: Money;
  createdAt: Date;
  confirmedAt: Date;
  transactions: Transaction[];
};
