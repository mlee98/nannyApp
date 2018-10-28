import { Task } from './task';
export class Job {
  familyName: string;
  description?: string;
  schedule?: string;
  tasks?: Task[];
}
