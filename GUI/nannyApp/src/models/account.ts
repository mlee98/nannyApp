import { Child } from './child';
import { NannyReference } from './nanny-reference';

export class Account {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  gender?: string;
  age?: number;
  type?: string; // parent or nanny

  // PARENT
  children?: Child[];

  // NANNY
  yearsExp?: number;
  workWithAges?: string;
  cpr?: boolean;
  petFriendly?: boolean;
  canDrive?: boolean;
  canCook?: boolean;
  bio?: string;
  references?: NannyReference[];
}
