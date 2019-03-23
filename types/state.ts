import Person from './Person';
import Company from './Company';
import Store from './Store';
import Organization from './Organization';
import MarketConfig from './MarketConfig';
import PaymentRequest from './money/PaymentRequest';
import { Category } from './categorization';

export default class State {
  people: Person[];
  companies: Company[];
  stores: Store[];
  organizations: Organization[];
  categories: Category[];
  paymentRequests: PaymentRequest[];
  config: MarketConfig;
}
