import { Task } from './task';
import { Child } from './child';
export class Job {
  id?: number;
  familyName?: string;
  nannyName?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  children?: Child[];
  duration?: string;
  nannyPhone?: string;
  parentPhone?: string;
  tasks?: Task[];
}
