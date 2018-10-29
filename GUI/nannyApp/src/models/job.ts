import { Task } from './task';
import { Child } from './child';
export class Job {
  id: number;
  familyName: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: number;
  children?: Child[];
  schedule?: string;
  tasks?: Task[];
}
