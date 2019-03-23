import { Currency } from './money/Money'
import { PaymentPlatform } from './money/PaymentRequest'
import { FundingDistribution } from './Organization';

export default class MarketConfig {
  minimumRate: number;
  suggestedRate: number;
  fundingDistribution: FundingDistribution;
  paymentPlatforms: PaymentPlatform[];
  currencies: Currency[];
}
