import Product from '../Product';
import Transaction from './Transaction';

// When a customer "adds to basket" it goes here
export default class BuyList {
  products: Product[];
  notes: string;
  payment: Transaction;
  repeatAt: Date;
}
