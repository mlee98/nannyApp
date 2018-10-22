import { NannyRef } from './reference';
import { Child } from './child';
export class Account {
  type?: string;
  username?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  gender?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  email?: string;
  phone?: string;
  references?: NannyRef[];
  children?: Child[];
}
