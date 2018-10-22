import { Child } from './child';

export class Account {
  name: string;
  email: string;
  phone: number;
  address: string;
  gender: string;
  age: number;
  type: string; // parent or nanny

  // PARENT
  children?: Child[];

  // NANNY
  yearsExp?: number;
  workWithAges?: string;
  skills?: string[];
  bio?: string;
}
