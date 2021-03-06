import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job, Child } from 'src/app/models';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  @Output() newJob: EventEmitter<Job> = new EventEmitter();

  @Input()
  children: Child[];

  reset: boolean;
  job: Job;

  selectedChildName: '';

  constructor() { }

  ngOnInit() {
    this.reset = false;
    this.job = {
      duration: '',
      children: [],
      tasks: []
    };
  }

  addChild(child: Child) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].name === child.name) {
        this.job.children.push(this.children[i]);
        break;
      }
    }
  }

  createJob() {
    this.job.nannyName = 'Bob';
    this.newJob.emit(this.job);
    this.job = {
      duration: '',
      children: [],
      tasks: []
    };
  }

  jobContains(child: Child) {
    const arr = this.job.children.filter(c => c.name === child.name && c.age === child.age);
    return arr.length;
  }

}
