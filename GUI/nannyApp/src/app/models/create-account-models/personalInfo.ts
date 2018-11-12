import { PaymentMethod } from '../payment-method';

export class PersonalInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  gender?: string;
  age?: number;
  paymentMethod?: PaymentMethod;
}
