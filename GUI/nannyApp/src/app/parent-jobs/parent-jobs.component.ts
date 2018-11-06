import { Component, OnInit } from '@angular/core';
import { Job } from '../models';
import { TEMP_ACCOUNT } from '../temp-account';

@Component({
  selector: 'app-parent-jobs',
  templateUrl: './parent-jobs.component.html',
  styleUrls: ['./parent-jobs.component.css']
})
export class ParentJobsComponent implements OnInit {

  dispJob: Job;
  tempRating: number;
  tempJob: Job = {};

  constructor() { }

  jobs: Job[] = TEMP_ACCOUNT.parentJobs;
  current: Job[];
  completed: Job[];

  ngOnInit() {
    this.dispJob = this.jobs.length ? this.jobs[0] : null;
    this.current = this.jobs.filter(job => job.isComplete === false);
    this.completed = this.jobs.filter(job => job.isComplete === true);
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
  }

  clickPay() {
    this.dispJob = {
      ...this.dispJob,
      isComplete: true,
      rating: this.tempRating,
    };
    this.completed.push(this.dispJob);
    this.tempRating = 0;
    this.current = this.current.filter(job => job.isComplete === false);
  }

}
