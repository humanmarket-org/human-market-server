import { Address, Phone } from '../support';
import Product, { ScheduledContent } from '../Product';
import DistributionAgent from './DistributionAgent';

export  default class Distribution {
  createdAt: Date;
  scheduledAt?: Date;
  storeCompletedAt: Date;
  personCompletedAt: Date;
  agent: DistributionAgent;
  address: Address;
  phone: Phone;
  products: Product[];
  scheduledContent?: ScheduledContent;
}

// If you buy multiple products with ScheduledContent
// you get the discount for bulk, but the Distribution
// is not added instantly, after the purchase, but one
// after the other when the previous one was delivered
// and it's scheduled on the day of the scheduled content
//
// This allows us to set office lunch services and such.
