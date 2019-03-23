import { Phone, Address } from './support';

export default class Person {
  createdAt: Date;
  auth: string; // whatever the Passportjs.org project needs
  role: 'user' | 'admin' | 'superadmin';
  displayName: string;
  phones: Phone[];
  addresses: Address[];
}
