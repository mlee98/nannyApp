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
  cpr?: boolean;
  petFriendly?: boolean;
  canDrive?: boolean;
  canCook?: boolean;
  bio?: string;
  references?: NannyReference[];
  nannyJobs?: Job[];
  parentJobs?: Job[];
  rating?: number;
  deposit?: Deposit;

  convert? (result: {username: string, password: string, first_name: string, last_name: string,
    age: number, gender: string, address: string, city: string, state: string, zip: number,
    email: string, phone_number: string}) {
      this.username = result.username;
          this.password = result.password;
          this.firstName = result.first_name;
          this.lastName = result.last_name;
          this.age = result.age;
          this.gender = result.gender;
          this.address = result.address;
          this.city = result.city;
          this.state = result.state;
          this.zip = result.zip;
          this.email = result.email;
          this.phone = result.phone_number;
    }
}
