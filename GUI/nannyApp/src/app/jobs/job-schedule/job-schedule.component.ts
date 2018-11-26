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

  @Input()
  editable: boolean;

  @Input()
  completeable: boolean;

  @Output() updateTasks = new EventEmitter();

  @Input()
  tasks: Task[];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed == false) {
        this.tasks[i].completed = false;
      } else {
        this.tasks[i].completed = true;
      }
    }

    this.newTask = false;
    if (this.tasks !== null) {
      this.createWeek(this.tasks);
    }
    this.showTasks = [];
    this.tempTask = {};
  }

  getFullDay(current: string) {
    let day = current;
    if (day === 'Wed') {
      day += 'nes';
    } else if (day === 'Sat') {
      day += 'ur';
    }
    day += 'day';
    return day;
  }

  createWeek(arr: Task[]) {
    this.week = {
      Sun: [],
      Mon: [],
      Tues: [],
      Wed: [],
      Thurs: [],
      Fri: [],
      Sat: []
    };
    if (!this.editable) {
      for (let i = 0; i < arr.length; i++) {
        this.week[arr[i].day].push(arr[i]);
      }
    }
    this.currentDay = 'Sun';
    this.showTasks = this.week.Sun;
  }

  showDay(day: string) {
    this.showTasks = this.week[day];
    this.currentDay = day;
  }

  addTask() {
    this.tempTask.day = this.currentDay;
    this.week[this.tempTask.day].push(this.tempTask);
    this.tasks.push(this.tempTask);
    this.tempTask = {};
    this.newTask = false;
  }

  update(task: Task) {
    this.updateTasks.emit(task);
  }

}
