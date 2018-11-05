import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job, Child } from 'src/app/models';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  @Input()
  job: Job = {};

  @Input()
  children: Child[] = [];

  reset: boolean;

  selectedChildName: '';

  constructor() { }

  ngOnInit() {
    this.reset = false;
    this.job.children = [
      {name: 'Bill', age: 12}
    ];
    this.children = [
      {name: 'Bill', age: 12},
      {name: 'Sam', age: 12},
      {name: 'Jill', age: 12}
    ];
  }

  addChild() {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].name === this.selectedChildName) {
        this.job.children.push(this.children[i]);
        break;
      }
    }
  }

}
