import { NannyReference } from '../nanny-reference';
export class NannyInfo {
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
}
