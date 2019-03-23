import {
  Phone, Address, Url, Hours
} from './support';
import { ProductStock } from './Product';
import { Review } from './categorization';
import DistributionAgent from './money/DistributionAgent'
import Person from './Person';
import Company from './Company';

export default class Store {
  createdAt: Date;
  name: string;
  company?: Company; // Can be a company-owned store or not
  address: Address;
  latitude: number;
  longitude: number;
  locationVisible: boolean;
  phones: Phone[];
  openHours: Hours;
  deliveryHours: Hours;
  urls: Url[];
  distributionAgents: DistributionAgent[];
  stock: ProductStock[];
  administration: StoreAdministration[];
  reviews: Review[];
}

export class StoreAdministration {
  person: Person
  role: 'base' | 'admin'
}
