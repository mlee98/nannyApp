import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.tasks.forEach(element => {
      this.week[element.day].push(element);
    });
    this.showTasks = this.week.Sun;
    this.currentDay = 'Sun';
  }

  showDay(day: string) {
    this.showTasks = this.week[day];
    this.currentDay = day;
  }

}
