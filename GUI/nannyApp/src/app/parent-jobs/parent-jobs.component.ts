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
  noJobs: boolean;
  nannyRating: number;
  tempJob: Job = {};

  constructor() { }

  jobs: Job[] = TEMP_ACCOUNT.parentJobs;

  ngOnInit() {
    this.dispJob = this.jobs[0];
    this.noJobs = false;
  }

  clickJob(clickedJob) {
    this.dispJob = clickedJob;
  }

}
