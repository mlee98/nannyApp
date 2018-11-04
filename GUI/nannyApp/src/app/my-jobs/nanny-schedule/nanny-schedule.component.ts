import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-nanny-schedule',
  templateUrl: './nanny-schedule.component.html',
  styleUrls: ['./nanny-schedule.component.css']
})
export class NannyScheduleComponent implements OnInit {

  @Input()
  tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
