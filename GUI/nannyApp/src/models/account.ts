import { Child } from './child';
import { NannyReference } from './nanny-reference';

export class Account {
  name?: string;
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
  skills?: string[];
  bio?: string;
  references?: NannyReference[];
}
