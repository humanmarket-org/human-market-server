import Money from './Money';
import PaymentRequest from './PaymentRequest';
import Distribution from './Distribution';
import { Project, FundingDistribution } from '../Organization';

export default class Transaction {
  createdAt: Date;
  amount: {
    products: Money;
    distribution: Money;
    extraFunding: [Money, Project][];
  }
  method: 'cash' | 'online';
  paymentRequest: PaymentRequest;
  distributions: Distribution[];
  fundingDistribution: FundingDistribution; // For the voluntary part
}
