import { Child } from './child';
import { NannyReference } from './nanny-reference';
import { Job } from './job';
import { Payment } from './payment';

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
  cpr?: boolean;
  petFriendly?: boolean;
  canDrive?: boolean;
  canCook?: boolean;
  bio?: string;
  references?: NannyReference[];
  nannyJobs?: Job[];
  parentJobs?: Job[];
  rating?: number;
}
