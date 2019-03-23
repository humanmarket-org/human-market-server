import {
  Phone, Address, Url, StoredImage
} from './support';
import Product,
  { ProductsSection, ProductsBundles } from './Product';
import Person from './Person';
import { Review } from './categorization';
import WithdrawalRequest from './money/WithdrawalRequest';


export default class Company {
  createdAt: Date;
  name: string;
  logo: StoredImage;
  cover: StoredImage;
  urls: Url[];
  fbMessenger: string;
  instagramFeed: string;
  phones: Phone[];
  addresses: Address[];
  products: Product[];
  productsSections: ProductsSection[];
  productsBundles: ProductsBundles[];
  administration: CompanyAdministration;
  reviews: Review[];
  withdrawalRequests: WithdrawalRequest[];
}

export class CompanyAdministration {
  person: Person;
  role: 'base' | 'admin';
}
