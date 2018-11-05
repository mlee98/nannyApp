import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models';

class Week {
  Mon?: Task[];
  Tues?: Task[];
  Wed?: Task[];
  Thurs?: Task[];
  Fri?: Task[];
  Sat?: Task[];
  Sun?: Task[];
}

@Component({
  selector: 'app-job-schedule',
  templateUrl: './job-schedule.component.html',
  styleUrls: ['./job-schedule.component.css']
})
export class JobScheduleComponent implements OnInit {

  @Input()
  tasks: Task[];

  @Input()
  editable: boolean;

  @Input()
  completeable: boolean;

  @Output() updateTasks = new EventEmitter();

  showTasks: Task[];
  currentDay: string;
  week: Week = {
    Sun: [],
    Mon: [],
    Tues: [],
    Wed: [],
    Thurs: [],
    Fri: [],
    Sat: []
  };
  newTask: boolean;
  tempTask: Task;

  constructor() { }

  ngOnInit() {
    this.currentDay = 'Sun';
    if (!this.editable) {
      this.tasks.forEach(element => {
        this.week[element.day].push(element);
      });
    }
    this.showTasks = this.week.Sun;
    this.newTask = false;
    this.tempTask = {};
  }

  showDay(day: string) {
    this.showTasks = this.week[day];
    this.currentDay = day;
  }

  addTask() {
    this.tempTask.day = this.currentDay;
    this.week[this.tempTask.day].push(this.tempTask);
    this.tempTask = {};
    this.newTask = false;
  }

  update() {
    const temporaryTasks = [];
    for (let i = 0; i < this.week.Mon.length; i++) {
      temporaryTasks.push(this.week.Mon[i]);
    }
    for (let i = 0; i < this.week.Tues.length; i++) {
      temporaryTasks.push(this.week.Tues[i]);
    }
    for (let i = 0; i < this.week.Wed.length; i++) {
      temporaryTasks.push(this.week.Wed[i]);
    }
    for (let i = 0; i < this.week.Thurs.length; i++) {
      temporaryTasks.push(this.week.Thurs[i]);
    }
    for (let i = 0; i < this.week.Fri.length; i++) {
      temporaryTasks.push(this.week.Fri[i]);
    }
    for (let i = 0; i < this.week.Sat.length; i++) {
      temporaryTasks.push(this.week.Sat[i]);
    }
    for (let i = 0; i < this.week.Sun.length; i++) {
      temporaryTasks.push(this.week.Sun[i]);
    }
    this.tasks = temporaryTasks;
    this.updateTasks.emit(true);
  }

}
