import { Component, OnInit } from '@angular/core';
import { Job } from './models/job';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  jobs: Job[];
  dispJob: Job;
  clicked: false;

  constructor() { }

  ngOnInit() {
    this.jobs = [
      {familyName: 'Smith',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      schedule: 'M-T-W',
      tasks: [
        {name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge', location: 'fdsfsd'},
        {name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer', location: '1111 Soccer Field Place'}
      ]
    },
      {familyName: 'Jones'},
      {familyName: 'Brodsffsfsdddddddsfdsfdsfdsfdfdsfdfsdfsdwn'},
      {familyName: 'Obama'}
    ];
    this.dispJob = this.jobs[0];
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
  }

}
