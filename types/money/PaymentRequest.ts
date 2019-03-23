import Money from './Money';

export type PaymentPlatform = {
  platform: 'mercadopago' | 'paypal' | 'coingate';
  platformHash: string;
}

 // The customer picks the platform they want to pay with
 // A PaymentRequest is generated with the platform that transfers
 // the money to a market holding account
 export default class PaymentRequest {
  platform: PaymentPlatform;
  amount: Money;
  createdAt: number;
  confirmedAt: number;
  transactionVerification: string;
    // Temporal Crypto Address
    // MercadoPago transaction ID that can be used for confirming
    // PayPal transaction ID that can be identifier for confirming
}
