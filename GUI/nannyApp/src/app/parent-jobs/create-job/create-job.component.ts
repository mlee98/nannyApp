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

  addChild() {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].name === this.selectedChildName) {
        this.job.children.push(this.children[i]);
        break;
      }
    }
  }

  createJob() {
    this.newJob.emit(this.job);
  }

}
