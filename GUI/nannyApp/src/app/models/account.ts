import { Child } from './child';
import { NannyReference } from './nanny-reference';
import { Job } from './job';
import { Payment } from './payment';
import { Deposit } from './deposit';

export class Account {
  id?: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  gender?: string;
  age?: number;
  type?: string; // parent or nanny

  // PARENT
  payment?: Payment;
  children?: Child[];

  // NANNY
  yearsExp?: number;
  minAge?: number;
  maxAge?: number;
  minWage?: number;
  maxWage?: number;
  cpr?: number;
  pet_friendly?: number;
  can_drive?: number;
  can_cook?: number;
  bio?: string;
  references?: NannyReference[];
  nannyJobs?: Job[];
  parentJobs?: Job[];
  rating?: number;
  deposit?: Deposit;
}
